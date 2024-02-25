import React from 'react';

import { DecodeHintType, Result } from '@zxing/library';

import { useQrScanner } from '../hooks/useQrScanner';
import { OnErrorFunction } from '../types';
import { defaultConstraints } from '../misc/defaultConstraints';

export interface IQrScannerProps {
    onError?: OnErrorFunction;
    onDecode?: (result: string) => void;
    className?: string;
    constraints?: MediaTrackConstraints;
    scanDelay?: number;
    deviceId?: string;
    hints?: Map<DecodeHintType, any>;
    audio?: boolean;
}

export const QrScanner = ({ onError, onDecode, className, constraints = defaultConstraints, scanDelay = 100, deviceId, hints, audio = true }: IQrScannerProps) => {
    async function handleOnResult(result: Result) {
        onDecode?.(result.getText());
    }

    function handleOnError(error: Error) {
        onError?.(error);
    }

    const { ref } = useQrScanner({
        onResult: handleOnResult,
        onError: handleOnError,
        constraints,
        deviceId,
        scanDelay,
        hints,
        audio
    });

    return (
        <div className={className ?? ''}>
            <video ref={ref} muted playsInline />
        </div>
    );
};
