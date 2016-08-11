/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("does not reset the time of a sound that hasn't played yet", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    const sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    sound.currentTime = 4;
    AudioPlayer.soundStop(sound);

    // Assert
    chai.expect(sound.currentTime).to.equal(4);
});