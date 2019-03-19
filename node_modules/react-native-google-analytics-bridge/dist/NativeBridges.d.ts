import { HitPayload } from "./models/Analytics";
import { EventSubscriptionVendor } from "react-native";
import DataLayerEvent from "./models/DataLayerEvent";
export interface IGoogleAnalyticsBridge {
    trackScreenView(trackerId: string, screenName: string, payload: HitPayload): void;
    trackEvent(trackerId: string, category: string, action: string, label: string, value: string, payload: HitPayload): void;
    trackTiming(trackerId: string, category: string, interval: number, name: string, label: string, payload: HitPayload): void;
    trackException(trackerId: string, error: string, fatal: boolean, payload: HitPayload): void;
    trackSocialInteraction(trackerId: string, network: string, action: string, targetUrl: string, payload: HitPayload): void;
    setUser(trackerId: string, userId: string): void;
    setClient(trackerId: string, clientId: string): void;
    getClientId(trackerId: string): Promise<string>;
    allowIDFA(trackerId: string, enabled: boolean): void;
    setSamplingRate(trackerId: string, sampleRate: number): void;
    setAnonymizeIp(trackerId: string, enabled: boolean): void;
    setAppName(trackerId: string, appName: string): void;
    setAppVersion(trackerId: string, appVersion: string): void;
    setCurrency(trackerId: string, currencyCode: string): void;
    setTrackUncaughtExceptions(trackerId: string, enabled: boolean): void;
    dispatch(): Promise<boolean>;
}
export interface IGoogleTagManagerBridge extends EventSubscriptionVendor {
    openContainerWithId(containerId: string): Promise<boolean>;
    refreshContainer(): Promise<boolean>;
    booleanForKey(key: string): Promise<boolean>;
    stringForKey(key: string): Promise<string>;
    doubleForKey(key: any): Promise<number>;
    pushDataLayerEvent(event: DataLayerEvent): Promise<boolean>;
    registerFunctionCallTagHandler(functionName: string): Promise<boolean>;
    setVerboseLoggingEnabled(enabled: boolean): Promise<boolean>;
}
export interface IGoogleAnalyticsSettings {
    setOptOut(enabled: any): void;
    setDispatchInterval(intervalInSeconds: any): void;
    setDryRun(enabled: any): void;
}
declare const AnalyticsBridge: IGoogleAnalyticsBridge;
declare const TagManagerBridge: IGoogleTagManagerBridge;
declare const AnalyticsSettings: IGoogleAnalyticsSettings;
export { TagManagerBridge };
export { AnalyticsBridge };
export { AnalyticsSettings };
