import { ROLE } from "../config/UserRoles";

const determinePermission = (role: string): string | null => {
    // Mapeamento direto de role para permissão (exemplo)
    if (role === 'admin') {
        return ROLE.ADMIN;
    } else if (role === 'basic') {
        return ROLE.BASIC;
    }
    // Adicione outras lógicas conforme necessário para suas roles
    return null; // Caso a role não seja encontrada
};

export default determinePermission;