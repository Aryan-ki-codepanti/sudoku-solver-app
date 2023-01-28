export const COLORS = {
    "--Primary-blue": "#307df6",
    "--Primary-gray": "#4e596b",
    "--Secondary-white": "#f0f3f9",
    "--Secondary-gray": "#d7e1f4"
};

export const WIDTHS = {
    "--NumBox": 50,
    "--InputNumBox": 65
};

export const getStyles = (dimension, n, i, j) => {
    const styles = {
        borderTop: `2px solid ${COLORS["--Secondary-white"]}`,
        borderLeft: `2px solid ${COLORS["--Secondary-white"]}`
    };

    if (!(j % dimension)) styles.borderLeft = "none";
    if (!(i % dimension)) styles.borderTop = "none";

    if (!((j + 1) % dimension) && j + 1 !== n)
        styles.borderRight = `4px solid ${COLORS["--Secondary-gray"]}`;

    if (!((i + 1) % dimension) && i + 1 !== n)
        styles.borderBottom = `4px solid ${COLORS["--Secondary-gray"]}`;
    return styles;
};
