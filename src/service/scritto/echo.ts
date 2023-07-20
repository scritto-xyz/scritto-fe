import { ResourceFetcher, ResourceFetcherInfo } from "solid-js";
import { AX_SCRITTO } from "./index";

export const echo: ResourceFetcher<any, any> = async ({value, refetching}: ResourceFetcherInfo<string, boolean>) => {
    const echoMessage = await AX_SCRITTO.get('echo');
    console.log(echoMessage.data);
    return echoMessage.data;
}