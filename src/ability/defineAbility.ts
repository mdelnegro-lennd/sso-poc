import { AbilityBuilder, Ability } from '@casl/ability';
import { Permission, User } from '../entity';

export const defineAbilitiesFor = (user: User) => {
    const { can, rules, cannot } = new AbilityBuilder(Ability);

    if (!user) return new Ability(rules);

    const permissions = user.role.permissions;

    permissions.forEach((permission: Permission) => {
        can(permission.action, permission.subject, JSON.parse(permission.conditions));
    });

    return new Ability(rules);
}
