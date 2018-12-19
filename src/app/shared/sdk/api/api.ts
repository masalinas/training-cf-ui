export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './productController.service';
import { ProductControllerService } from './productController.service';
export const APIS = [AuthControllerService, ProductControllerService];
