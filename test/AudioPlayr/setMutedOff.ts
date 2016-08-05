/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("unmutes if the sound is playing", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    AudioPlayer.play(mocks.mockSoundName);
    AudioPlayer.setMutedOff();

    // Assert
    chai.expect(sound.volume).to.equal(1);
});

mochaLoader.addTest("unmutes if the sound is paused", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    AudioPlayer.pauseTheme();
    AudioPlayer.setMutedOff();

    // Assert
    chai.expect(sound.volume).to.equal(1);
});