/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("plays the sound if sounds are muted (commented out)", (done): void => {
    // paused is undefined in this version of PhantomJS

    /*// Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound;

    // Act
    AudioPlayer.setMutedOn();
    sound = AudioPlayer.play(mocks.mockSoundName);

    // Assert
    setTimeout(() => {
        chai.expect(sound.paused).to.equal(false);
        done();
    }, 1);*/

    // remove this once the PhantomJS issue is resolved
    done();
});

mochaLoader.addTest("plays the sound if sounds are not muted (commented out)", (done): void => {
    // paused is undefined in this version of PhantomJS

    /*// Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound;

    // Act
    sound = AudioPlayer.play(mocks.mockSoundName);

    // Assert
    setTimeout(() => {
        chai.expect(sound.paused).to.equal(false);
        done();
    }, 1);*/

    // remove this once the PhantomJS issue is resolved
    done();
});

mochaLoader.addTest("throws an error if the sound doesn't exist", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Assert
    chai.expect(AudioPlayer.play.bind(AudioPlayer, "X")).to.throw("Unknown name given to AudioPlayr.play: 'X'.");
});
