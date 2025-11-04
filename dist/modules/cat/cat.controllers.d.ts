import { Request, Response } from "express";
declare const _default: {
    getAllCat: (req: Request, res: Response) => Promise<void>;
    postCat: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    patchCat: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCat: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCat: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=cat.controllers.d.ts.map