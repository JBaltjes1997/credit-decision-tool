import { useEffect, useState } from "react";
import { api, elasticApi } from "./api-client";
import { Detail } from "./types/detail";


export async function getDetails(): Promise<JSON[]> {
    const details = await elasticApi<JSON[]>(`/details/_search?filter_path=hits.hits._source`);
    return details;
}