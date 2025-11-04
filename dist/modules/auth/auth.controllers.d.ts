import express, { Request, Response } from "express";
declare const _default: {
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
    logout: (req: Request, res: Response) => Promise<void>;
};
export default _default;
//# sourceMappingURL=auth.controllers.d.ts.map