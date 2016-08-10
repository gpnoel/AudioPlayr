/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("mutes if the sound is playing", (done): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    AudioPlayer.play(mocks.mockSoundName);
    setTimeout(() => {
        AudioPlayer.setMutedOn();
    }, 1)

    // Assert
    setTimeout(() => {
        chai.expect(sound.volume).to.equal(0);
        done();
    }, 1);
});

mochaLoader.addTest("mutes if the sound is paused", (done): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    setTimeout(() => {
        AudioPlayer.pauseTheme();
        AudioPlayer.setMutedOn();
    }, 1);

    // Assert
    setTimeout(() => {
        chai.expect(sound.volume).to.equal(0);
        done();
    }, 1);
});