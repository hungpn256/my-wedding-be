import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validator = async <T>(body: any, className: any): Promise<T> => {
  const input = plainToInstance(className, body);

  const errors = await validate(input);

  if (!errors.length) return input as T;

  const message = getErrorMap(errors);
  throw new Error(JSON.stringify({ errors: message }));
};

const getErrorMap = (errors: any, parent?: any): any => {
  const message: any[] = [];
  errors.forEach((e: any) => {
    if (e.children.length) {
      message.push(...getErrorMap(e.children, parent));
    } else {
      Object.keys(e.constraints).forEach((key) => {
        message.push({
          field: parent ? `${parent.property}.${e.property}` : e.property,
          message: e.constraints[key],
        });
      });
    }
  });

  return message;
};
