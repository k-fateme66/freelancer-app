import http from "./httpService";

export function ChangeProposalStatusApi({ proposalId, ...rest }) { // {status, projectId}
    console.log(rest);
    return http
        .patch(`/proposal/${proposalId}`, rest)
        .then(({ data }) => data.data);
}
