/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("calls the function immediately if sound doesn't exist", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    let num = 0;
    const increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.addEventImmediate("X", "loadeddata", increase);

    // Assert
    chai.expect(num).to.equal(1);
});

mochaLoader.addTest("calls the function immediately if the sound is paused", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    let num = 0;
    const increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.pauseSound(AudioPlayer.library[mocks.mockSoundName]);
    AudioPlayer.addEventImmediate(mocks.mockSoundName, "loadeddata", increase);

    // Assert
    chai.expect(num).to.equal(1);
});

mochaLoader.addTest("doesn't call the function if the sound is not paused and exists", (done): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    let num = 0;
    const increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.play(mocks.mockSoundName);
    setTimeout(() => {
        AudioPlayer.addEventImmediate(mocks.mockSoundName, "loadeddata", increase);

        // Assert
        chai.expect(num).to.equal(0);
        done();
    }, 1);
});
