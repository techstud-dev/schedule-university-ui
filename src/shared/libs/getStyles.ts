export type Mods = Record<string, boolean | string | undefined>;
export type Additional = Array<string | undefined>;

export function getStyles(
    classNames: string,
    mods: Mods = {},
    additional: Additional = [],
): string {
    return [
        classNames,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
};
