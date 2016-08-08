/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

// var done = (sound?: any) => { chai.expect(sound.paused).to.equal(false); };
mochaLoader.addTest("still plays the sound if sounds are muted", (done): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.setMutedOn();
    var sound;
    sound = AudioPlayer.play(mocks.mockSoundName);

    // Assert
    setTimeout(() => {
        chai.expect(sound.paused).to.equal(false);
        done();
    }, 1);
});

mochaLoader.addTest("throws an error", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Assert
    chai.expect(AudioPlayer.play.bind(AudioPlayer, "X")).to.throw("Unknown name given to AudioPlayr.play: 'X'.");
});

mochaLoader.addTest("sets the name attribute of the sound", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    var sound = AudioPlayer.play(mocks.mockSoundName);

    // Assert
    chai.expect(sound.getAttribute("name")).to.equal(mocks.mockSoundName);
});