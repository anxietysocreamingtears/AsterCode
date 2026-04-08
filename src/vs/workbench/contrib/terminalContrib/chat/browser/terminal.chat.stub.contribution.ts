/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { URI } from '../../../../../base/common/uri.js';
import { InstantiationType, registerSingleton } from '../../../../../platform/instantiation/common/extensions.js';
import { IChatTerminalToolProgressPart, ITerminalChatService, ITerminalInstance } from '../../../terminal/browser/terminal.js';

class NullTerminalChatService implements ITerminalChatService {
	declare _serviceBrand: undefined;

	readonly onDidRegisterTerminalInstanceWithToolSession: Event<ITerminalInstance> = Event.None;
	readonly onDidContinueInBackground: Event<string> = Event.None;

	registerTerminalInstanceWithToolSession(_terminalToolSessionId: string | undefined, _instance: ITerminalInstance): void { }

	async getTerminalInstanceByToolSessionId(_terminalToolSessionId: string): Promise<ITerminalInstance | undefined> {
		return undefined;
	}

	getToolSessionTerminalInstances(_hiddenOnly?: boolean): readonly ITerminalInstance[] {
		return [];
	}

	getToolSessionIdForInstance(_instance: ITerminalInstance): string | undefined {
		return undefined;
	}

	registerTerminalInstanceWithChatSession(_chatSessionResource: URI, _instance: ITerminalInstance): void { }

	getChatSessionResourceForInstance(_instance: ITerminalInstance): URI | undefined {
		return undefined;
	}

	isBackgroundTerminal(_terminalToolSessionId?: string): boolean {
		return false;
	}

	registerProgressPart(_part: IChatTerminalToolProgressPart) {
		return Disposable.None;
	}

	setFocusedProgressPart(_part: IChatTerminalToolProgressPart): void { }

	clearFocusedProgressPart(_part: IChatTerminalToolProgressPart): void { }

	getFocusedProgressPart(): IChatTerminalToolProgressPart | undefined {
		return undefined;
	}

	getMostRecentProgressPart(): IChatTerminalToolProgressPart | undefined {
		return undefined;
	}

	setChatSessionAutoApproval(_chatSessionResource: URI, _enabled: boolean): void { }

	hasChatSessionAutoApproval(_chatSessionResource: URI): boolean {
		return false;
	}

	addSessionAutoApproveRule(_chatSessionResource: URI, _key: string, _value: boolean | { approve: boolean; matchCommandLine?: boolean }): void { }

	getSessionAutoApproveRules(_chatSessionResource: URI): Readonly<Record<string, boolean | { approve: boolean; matchCommandLine?: boolean }>> {
		return {};
	}

	continueInBackground(_terminalToolSessionId: string): void { }
}

registerSingleton(ITerminalChatService, NullTerminalChatService, InstantiationType.Delayed);
