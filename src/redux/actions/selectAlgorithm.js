export const type = 'selectAlgorithm';

const selectAlgorithm = (algId) => ({
    type,
    payload: algId,
});

export default selectAlgorithm;

