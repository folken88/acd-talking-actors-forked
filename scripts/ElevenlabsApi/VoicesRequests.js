import { ElevenlabsRequest } from "./ElevenlabsRequests.js";


export class GetVoicesRequest extends ElevenlabsRequest {
    async fetch() {
        try {
            let allVoices;
            const response = await super.fetchJson('voices');
            const parsedResponse = JSON.parse(response);
            allVoices = parsedResponse.voices;

            return allVoices;
        } catch (error) {
            console.error("Talking Actors: Error in GetVoicesRequest:", error);
            throw error;
        }
    }
}

export class GetVoiceSettingsRequest extends ElevenlabsRequest {
    voiceId;

    constructor(voiceId) {
        super();
        this.voiceId = voiceId;
    }

    async fetch() {
        let settings = await super.fetchJson(`voices/${this.voiceId}/settings`)
            .then(text => JSON.parse(text));

        return settings;

    }
}
