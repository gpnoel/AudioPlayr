/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets the volume to 0 if sounds are muted", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.setMutedOn();
    const sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.volume).to.equal(0);
});

mochaLoader.addTest("sets the volume to 1 if sounds are not muted", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr();

    // Act
    const sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.volume).to.equal(1);
});

mochaLoader.addTest("sets volumeReal to getVolumeLocal (of type number)", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ]
        },
        getVolumeLocal: .5,
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    const sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.getAttribute("volumeReal")).to.equal("0.5");
});

mochaLoader.addTest("sets volumeReal to getVolumeLocal (of type function)", (): void => {
    // Arrange
    const AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ]
        },
        getVolumeLocal: (): number => {
            return .5;
        },
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    AudioPlayer.setMutedOn();
    const sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.getAttribute("volumeReal")).to.equal("0.5");
});