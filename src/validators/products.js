import { body, validationResult } from 'express-validator';

export const validateCreate = [
    body('Name', 'El campo Name es obligatorio y debe ser STRING.')
        .exists().isString().not().isEmpty(),
    body('Description', 'El campo Description es obligatorio y debe ser STRING.')
        .exists().isString().not().isEmpty(),
    body('Quantity', 'El campo Quantity debe ser NUMBER.')
        .default(0).isNumeric().custom((value, { req }) => {
      if (value < 0) {
        throw new Error('El valor no puede ser menor a cero(0)');
      }
      return true;
    }),
    (req, res, next) => {
      try {
        validationResult(req).throw();
        return next();
      } catch (error) {
        res.status(403);
        res.send({ errors: error.array()});
      }
    }
];

export const validateUpdate = [
    body('Name', 'El campo Name es obligatorio y debe ser STRING.')
        .exists().isString().not().isEmpty(),
    body('Description', 'El campo Description es obligatorio y debe ser STRING.')
        .exists().isString().not().isEmpty(),
    body('Quantity', 'El campo Quantity es obligatorio y debe ser NUMBER.')
        .exists().isNumeric().not().isEmpty().custom((value, { req }) => {
      if (value < 0) {
        throw new Error('El valor no puede ser menor a cero(0)');
      }
      return true;
    }),
    (req, res, next) => {
      try {
        validationResult(req).throw();
        return next();
      } catch (error) {
        res.status(403);
        res.send({ errors: error.array()});
      }
    }
];

