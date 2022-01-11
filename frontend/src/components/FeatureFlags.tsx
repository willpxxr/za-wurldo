import React, {FC} from "react";

export interface FeatureFlag {
    name: string,
    description: string,
    enabled: boolean,
}

export interface FeatureFlagsProps {
    flags: FeatureFlag[]
}

const flagsKey = "flags"

export const FeatureFlags: FC<FeatureFlagsProps> = (props) => {
    localStorage.setItem(flagsKey, JSON.stringify(props.flags))

    return (props.children as React.ReactElement)
}

export interface FeatureProps {
    name: string
}

export const Feature: FC<FeatureProps> = (props) => {
    if (isFeatureEnabled(props.name)) {
        return (props.children as React.ReactElement)
    }

    return null
}

export const isFeatureEnabled = (featureName: String) => {
    const features = localStorage.getItem(flagsKey)
    if (features) {
        const feature = (JSON.parse(features) as FeatureFlag[])?.find((feature) => (
            feature.name === featureName
        ))

        if (typeof feature != "undefined" && feature.enabled) {
            return true
        }
    }

    return false
}
