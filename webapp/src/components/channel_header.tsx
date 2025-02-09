// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License for license information.

import React, {useRef} from 'react';
import {useSelector} from 'react-redux';

import PlaybooksProductIcon, {Ref as PlaybookRunIconRef} from 'src/components/assets/icons/playbooks_product_icon';

import {isPlaybookRunRHSOpen, inPlaybookRunChannel} from 'src/selectors';

export const ChannelHeaderButton = () => {
    const myRef = useRef<PlaybookRunIconRef>(null);
    const isRHSOpen = useSelector(isPlaybookRunRHSOpen);

    // If it has been mounted, we know our parent is always a button.
    const parent = myRef?.current ? myRef?.current?.parentNode as HTMLButtonElement : null;
    if (parent) {
        if (isRHSOpen) {
            parent.classList.add('channel-header__icon--active');
        } else {
            parent.classList.remove('channel-header__icon--active');
        }
    }

    return (
        <PlaybooksProductIcon
            id='incidentIcon'
            ref={myRef}
        />
    );
};

export const ChannelHeaderText = () => {
    const currentChannelIsPlaybookRun = useSelector(inPlaybookRunChannel);
    if (currentChannelIsPlaybookRun) {
        return 'Toggle Run Details';
    }

    return 'Toggle Playbook List';
};

export const ChannelHeaderTooltip = ChannelHeaderText;
