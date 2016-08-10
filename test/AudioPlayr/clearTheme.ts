/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("removes the theme from sounds", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    AudioPlayer.clearTheme();

    // Assert
    chai.expect(typeof AudioPlayer.sounds[mocks.mockSoundName]).to.equal("undefined");
});

mochaLoader.addTest("sets the theme to undefined", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    AudioPlayer.clearTheme();

    // Assert
    chai.expect(typeof AudioPlayer.theme).to.equal("undefined");
});

mochaLoader.addTest("sets the themeName to undefined", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    AudioPlayer.clearTheme();

    // Assert
    chai.expect(typeof AudioPlayer.themeName).to.equal("undefined");
});
