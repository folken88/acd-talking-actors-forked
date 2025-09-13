# Changelog

All notable changes to this project will be documented in this file.

## [0.9.0] - 2025-01-13

### Added
- **Eleven v3 (Alpha) Support**: Full integration with the new Eleven v3 model featuring multilingual output (70+ languages)
- **Language Selection**: Comprehensive language code support for improved output quality across 70+ languages
- **Dialogue Mode**: Multi-speaker conversation support for Eleven v3 model
- **Enhanced Voice Settings**: Added configurable controls for:
  - Stability slider
  - Similarity boost slider  
  - Style slider
  - Use Speaker Boost checkbox
- **Sound Effects Enhancement**: Added loop parameter support for seamless looping sound effects
- **Model Selection**: Choose between Eleven Turbo v2, Flash v2, v3, or legacy Multilingual v2
- **Better Error Handling**: Improved error messages for 403 Forbidden (restricted voices) and API issues

### Changed
- **Module ID**: Updated from `acd-talking-actors` to `acd-talking-actors-forked` for proper fork identification
- **Module Version**: Bumped to 0.9.0 to reflect major feature additions
- **API Integration**: Updated to support latest ElevenLabs API capabilities as of September 2025
- **Voice Settings UI**: Enhanced interface with new controls and better organization

### Fixed
- **Speed Slider Issue**: Removed unsupported speed parameter that was causing 400 Bad Request errors
- **Flag Scope Errors**: Fixed module ID mismatch causing flag storage issues
- **Voice Loading**: Resolved issues with voice dropdown not populating after module ID change
- **Error Handling**: Added proper error handling for restricted voices and API failures

### Removed
- **Speed Control**: Temporarily removed speed slider (not supported by ElevenLabs API) - future SSML implementation planned

### Technical Details
- Updated `TextToSpeechRequests.js` to support new API parameters
- Enhanced `VoiceSettingsApp.js` with new UI controls
- Improved `ElevenlabsConnector.js` with better error handling
- Added comprehensive language code constants
- Updated templates with new voice settings controls

---

## [0.8.1] - Original Release
- Base functionality from original acd-talking-actors module
- ElevenLabs API integration
- Voice selection and configuration
- Chat command support (/talk)
- Sound effects generation
- Read-aloud text support

---

## Credits

### Original Author
- **Acd-Jake** - Original creator of the acd-talking-actors module
  - GitHub: [acd-jake](https://github.com/acd-jake)
  - Discord: Acd-Jake

### Fork Maintainer  
- **Tobias Merriman** (Folken Games) - Maintainer of this updated fork
  - GitHub: [folken88](https://github.com/folken88)
  - Company: [Folken Games](https://github.com/folken88)
  - Repository: [acd-talking-actors-forked](https://github.com/folken88/acd-talking-actors-forked)

### Acknowledgments
- **ElevenLabs** - For providing the excellent text-to-speech API
- **FoundryVTT Community** - For feedback and testing
- **Vexthecollector** - Original inspiration from "Elevenlabs for Foundry" module
