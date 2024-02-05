import { Request, Response } from 'express';
import { AuthUserService } from '../../services/User/AuthUserService';
import determinePermissions from '../../utils/determinePermissions';

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authUserService = new AuthUserService();

        try {
            const auth = await authUserService.execute({
                email,
                password,
            });

            // Adicionar lógica para conceder permissões com base nas roles
            const permissions = determinePermissions(auth.role);

            // Adicionando as permissões ao objeto do usuário
            auth.role = permissions;

            return res.json(auth);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

}

export { AuthUserController };