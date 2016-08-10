/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("throws an error if the sound doesn't exist", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Assert
    chai.expect(AudioPlayer.removeEventListeners.bind(AudioPlayer, "X")).to.throw("Unknown name given to removeEventListeners: 'X'.");
});

mochaLoader.addTest("removes the event from the sound", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "loadeddata", increase);
    AudioPlayer.removeEventListeners(mocks.mockSoundName, "loadeddata");

    // Assert
    chai.expect(sound.addedEvents["loadeddata"]).to.deep.equal([]);
});

mochaLoader.addTest("leaves events on the sound unchanged if the event didn't exist", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.removeEventListeners(mocks.mockSoundName, "loadeddata");

    // Assert
    chai.expect(sound.addedEvents).to.be.undefined;
});