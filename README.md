# acd-talking-actors-forked (Updated for ElevenLabs API 2025)

A modernized fork of the original acd-talking-actors module, updated to support the latest ElevenLabs API capabilities as of September 2025.

Selectable and adjustable voices for FoundryVTT actors through Elevenlabs integration. You can configure voices, finetune them and assign them to your linked actors in FoundryVTT using the voice settings dialog in the scene controls bar.

## New Features (v0.9.0)
- **Eleven v3 Support**: Full support for the new Eleven v3 (alpha) model with multilingual output (70+ languages)
- **Dialogue Mode**: Multi-speaker conversation support for Eleven v3
- **Language Selection**: Choose from 70+ supported languages for improved output quality
- **Enhanced Sound Effects**: New loop parameter for seamless looping sound effects
- **Model Selection**: Choose between Eleven Turbo v2, Flash v2, v3, or legacy Multilingual v2
- **Backward Compatibility**: Maintains support for existing voice configurations

Using the chat command /talk with an actor selected will let the character speak with the configured voice. Alternatively use /talk [VoiceName] to override the configuration and let the character speak with the given voice.

An Elevenlabs subscription is required for the module to work. https://beta.elevenlabs.io/

## Installation

1. Install the module through FoundryVTT's module browser
2. Configure your ElevenLabs API key in module settings
3. Select voices for your actors using the voice settings dialog
4. Use `/talk` in chat to make actors speak

## Features

* **Eleven v3 (Alpha) Support**: Full integration with the latest ElevenLabs model featuring multilingual output
* **Language Selection**: Choose from 70+ supported languages for improved output quality
* **Dialogue Mode**: Multi-speaker conversation support for Eleven v3
* **Enhanced Voice Settings**: Fine-tune stability, similarity boost, style, and speaker boost
* **Sound Effects**: Generate and loop sound effects based on text descriptions
* **Model Selection**: Choose between Eleven Turbo v2, Flash v2, v3, or legacy Multilingual v2
* **Read-aloud Support**: Insert macros in journals for text-to-speech
* **Replay Functionality**: Replay generated speech without using additional API credits
* **Token HUD Integration**: Quick text input directly from token interface
* **Third-party API**: Integration support for other modules
* **Optional Integrations**: Works with Yendors Scene Actors and Conversation Hud modules

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

## License

This project is licensed under the same terms as the original acd-talking-actors module.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and changes.
