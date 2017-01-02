/**
 * Created by John on 12/19/2016.
 */

export interface CourseSummary {
    readonly id: number,
    description: string,
    readonly url: string,
    iconUrl: string,
    courseListIcon: string,
    seqNo: number,
}

export function createCourseSummary({
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo}:any): CourseSummary {

        return {
            id, url, description, iconUrl, courseListIcon, seqNo
        };
}

export function createCourseSummaries(data: any[]): CourseSummary[] {
      return data.map(createCourseSummary);
}