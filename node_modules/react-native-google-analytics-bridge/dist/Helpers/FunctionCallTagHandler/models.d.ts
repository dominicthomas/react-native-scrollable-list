export declare type Handler = (functionName: string, tagArguments: any) => any;
export declare type RegisterHandler = (functionName: string, handler: Handler) => Promise<boolean>;
