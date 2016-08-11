/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("does not call the callback before the sound is played", (done): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    const sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    const increase = () => { num += 1; }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "play", increase);
    const watcher = num;
    AudioPlayer.play(mocks.mockSoundName);


    // Assert
    setTimeout(() => {
        chai.expect(watcher).to.equal(0);
        done();
    }, 1);
});

mochaLoader.addTest("adds the event to the sound", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();
    const sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    const increase = () => { num += 1; }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "loadeddata", increase);

    // Assert
    chai.expect(sound.addedEvents["loadeddata"]).to.deep.equal([increase]);
});