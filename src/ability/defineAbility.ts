import { AbilityBuilder, Ability } from '@casl/ability';

export const defineAbilitiesFor = (user: any) => {
    const { can, rules, cannot } = new AbilityBuilder(Ability);

    if (!user) return new Ability(rules);

    if (user.isAdmin) {
        can('manage', 'all');
    } else {
        if (user.id === 1) {
            can('read', 'company');

            can('view', 'company', {
                id: { $in: [2] }
            });
        }

        if (user.id === 2) {
            can('read', 'company');

            can('view', 'company', {
                id: { $in: [1] }
            });
        }

        if (user.id === 3) {
            can('read', 'company');
        }

        if (user.id === 4) {
            console.log('hola');
            cannot('manage', 'all');
        }
    }

    return new Ability(rules);
}
