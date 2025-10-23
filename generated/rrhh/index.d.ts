
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model empleado
 * 
 */
export type empleado = $Result.DefaultSelection<Prisma.$empleadoPayload>
/**
 * Model rrhh_departamento
 * 
 */
export type rrhh_departamento = $Result.DefaultSelection<Prisma.$rrhh_departamentoPayload>
/**
 * Model rrhh_usuario
 * 
 */
export type rrhh_usuario = $Result.DefaultSelection<Prisma.$rrhh_usuarioPayload>
/**
 * Model rrhh_rol
 * 
 */
export type rrhh_rol = $Result.DefaultSelection<Prisma.$rrhh_rolPayload>
/**
 * Model rrhh_empleado_rol
 * 
 */
export type rrhh_empleado_rol = $Result.DefaultSelection<Prisma.$rrhh_empleado_rolPayload>
/**
 * Model rrhh_ausencia
 * 
 */
export type rrhh_ausencia = $Result.DefaultSelection<Prisma.$rrhh_ausenciaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empleados
 * const empleados = await prisma.empleado.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Empleados
   * const empleados = await prisma.empleado.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empleado`: Exposes CRUD operations for the **empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.empleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rrhh_departamento`: Exposes CRUD operations for the **rrhh_departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rrhh_departamentos
    * const rrhh_departamentos = await prisma.rrhh_departamento.findMany()
    * ```
    */
  get rrhh_departamento(): Prisma.rrhh_departamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rrhh_usuario`: Exposes CRUD operations for the **rrhh_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rrhh_usuarios
    * const rrhh_usuarios = await prisma.rrhh_usuario.findMany()
    * ```
    */
  get rrhh_usuario(): Prisma.rrhh_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rrhh_rol`: Exposes CRUD operations for the **rrhh_rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rrhh_rols
    * const rrhh_rols = await prisma.rrhh_rol.findMany()
    * ```
    */
  get rrhh_rol(): Prisma.rrhh_rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rrhh_empleado_rol`: Exposes CRUD operations for the **rrhh_empleado_rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rrhh_empleado_rols
    * const rrhh_empleado_rols = await prisma.rrhh_empleado_rol.findMany()
    * ```
    */
  get rrhh_empleado_rol(): Prisma.rrhh_empleado_rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rrhh_ausencia`: Exposes CRUD operations for the **rrhh_ausencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rrhh_ausencias
    * const rrhh_ausencias = await prisma.rrhh_ausencia.findMany()
    * ```
    */
  get rrhh_ausencia(): Prisma.rrhh_ausenciaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    empleado: 'empleado',
    rrhh_departamento: 'rrhh_departamento',
    rrhh_usuario: 'rrhh_usuario',
    rrhh_rol: 'rrhh_rol',
    rrhh_empleado_rol: 'rrhh_empleado_rol',
    rrhh_ausencia: 'rrhh_ausencia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empleado" | "rrhh_departamento" | "rrhh_usuario" | "rrhh_rol" | "rrhh_empleado_rol" | "rrhh_ausencia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      empleado: {
        payload: Prisma.$empleadoPayload<ExtArgs>
        fields: Prisma.empleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findFirst: {
            args: Prisma.empleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findMany: {
            args: Prisma.empleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>[]
          }
          create: {
            args: Prisma.empleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          createMany: {
            args: Prisma.empleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.empleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>[]
          }
          delete: {
            args: Prisma.empleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          update: {
            args: Prisma.empleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          deleteMany: {
            args: Prisma.empleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.empleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>[]
          }
          upsert: {
            args: Prisma.empleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.empleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.empleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      rrhh_departamento: {
        payload: Prisma.$rrhh_departamentoPayload<ExtArgs>
        fields: Prisma.rrhh_departamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rrhh_departamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rrhh_departamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          findFirst: {
            args: Prisma.rrhh_departamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rrhh_departamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          findMany: {
            args: Prisma.rrhh_departamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>[]
          }
          create: {
            args: Prisma.rrhh_departamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          createMany: {
            args: Prisma.rrhh_departamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rrhh_departamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>[]
          }
          delete: {
            args: Prisma.rrhh_departamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          update: {
            args: Prisma.rrhh_departamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          deleteMany: {
            args: Prisma.rrhh_departamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rrhh_departamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rrhh_departamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>[]
          }
          upsert: {
            args: Prisma.rrhh_departamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_departamentoPayload>
          }
          aggregate: {
            args: Prisma.Rrhh_departamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRrhh_departamento>
          }
          groupBy: {
            args: Prisma.rrhh_departamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_departamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.rrhh_departamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_departamentoCountAggregateOutputType> | number
          }
        }
      }
      rrhh_usuario: {
        payload: Prisma.$rrhh_usuarioPayload<ExtArgs>
        fields: Prisma.rrhh_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rrhh_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rrhh_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          findFirst: {
            args: Prisma.rrhh_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rrhh_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          findMany: {
            args: Prisma.rrhh_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>[]
          }
          create: {
            args: Prisma.rrhh_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          createMany: {
            args: Prisma.rrhh_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rrhh_usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>[]
          }
          delete: {
            args: Prisma.rrhh_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          update: {
            args: Prisma.rrhh_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.rrhh_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rrhh_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rrhh_usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>[]
          }
          upsert: {
            args: Prisma.rrhh_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Rrhh_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRrhh_usuario>
          }
          groupBy: {
            args: Prisma.rrhh_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.rrhh_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_usuarioCountAggregateOutputType> | number
          }
        }
      }
      rrhh_rol: {
        payload: Prisma.$rrhh_rolPayload<ExtArgs>
        fields: Prisma.rrhh_rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rrhh_rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rrhh_rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          findFirst: {
            args: Prisma.rrhh_rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rrhh_rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          findMany: {
            args: Prisma.rrhh_rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>[]
          }
          create: {
            args: Prisma.rrhh_rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          createMany: {
            args: Prisma.rrhh_rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rrhh_rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>[]
          }
          delete: {
            args: Prisma.rrhh_rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          update: {
            args: Prisma.rrhh_rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          deleteMany: {
            args: Prisma.rrhh_rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rrhh_rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rrhh_rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>[]
          }
          upsert: {
            args: Prisma.rrhh_rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_rolPayload>
          }
          aggregate: {
            args: Prisma.Rrhh_rolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRrhh_rol>
          }
          groupBy: {
            args: Prisma.rrhh_rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_rolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rrhh_rolCountArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_rolCountAggregateOutputType> | number
          }
        }
      }
      rrhh_empleado_rol: {
        payload: Prisma.$rrhh_empleado_rolPayload<ExtArgs>
        fields: Prisma.rrhh_empleado_rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rrhh_empleado_rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rrhh_empleado_rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          findFirst: {
            args: Prisma.rrhh_empleado_rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rrhh_empleado_rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          findMany: {
            args: Prisma.rrhh_empleado_rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>[]
          }
          create: {
            args: Prisma.rrhh_empleado_rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          createMany: {
            args: Prisma.rrhh_empleado_rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rrhh_empleado_rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>[]
          }
          delete: {
            args: Prisma.rrhh_empleado_rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          update: {
            args: Prisma.rrhh_empleado_rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          deleteMany: {
            args: Prisma.rrhh_empleado_rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rrhh_empleado_rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rrhh_empleado_rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>[]
          }
          upsert: {
            args: Prisma.rrhh_empleado_rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_empleado_rolPayload>
          }
          aggregate: {
            args: Prisma.Rrhh_empleado_rolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRrhh_empleado_rol>
          }
          groupBy: {
            args: Prisma.rrhh_empleado_rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_empleado_rolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rrhh_empleado_rolCountArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_empleado_rolCountAggregateOutputType> | number
          }
        }
      }
      rrhh_ausencia: {
        payload: Prisma.$rrhh_ausenciaPayload<ExtArgs>
        fields: Prisma.rrhh_ausenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rrhh_ausenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rrhh_ausenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          findFirst: {
            args: Prisma.rrhh_ausenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rrhh_ausenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          findMany: {
            args: Prisma.rrhh_ausenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>[]
          }
          create: {
            args: Prisma.rrhh_ausenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          createMany: {
            args: Prisma.rrhh_ausenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rrhh_ausenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>[]
          }
          delete: {
            args: Prisma.rrhh_ausenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          update: {
            args: Prisma.rrhh_ausenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          deleteMany: {
            args: Prisma.rrhh_ausenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rrhh_ausenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rrhh_ausenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>[]
          }
          upsert: {
            args: Prisma.rrhh_ausenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rrhh_ausenciaPayload>
          }
          aggregate: {
            args: Prisma.Rrhh_ausenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRrhh_ausencia>
          }
          groupBy: {
            args: Prisma.rrhh_ausenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_ausenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.rrhh_ausenciaCountArgs<ExtArgs>
            result: $Utils.Optional<Rrhh_ausenciaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    empleado?: empleadoOmit
    rrhh_departamento?: rrhh_departamentoOmit
    rrhh_usuario?: rrhh_usuarioOmit
    rrhh_rol?: rrhh_rolOmit
    rrhh_empleado_rol?: rrhh_empleado_rolOmit
    rrhh_ausencia?: rrhh_ausenciaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    ausencias: number
    roles: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ausencias?: boolean | EmpleadoCountOutputTypeCountAusenciasArgs
    roles?: boolean | EmpleadoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountAusenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_ausenciaWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_empleado_rolWhereInput
  }


  /**
   * Count Type Rrhh_departamentoCountOutputType
   */

  export type Rrhh_departamentoCountOutputType = {
    empleados: number
  }

  export type Rrhh_departamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | Rrhh_departamentoCountOutputTypeCountEmpleadosArgs
  }

  // Custom InputTypes
  /**
   * Rrhh_departamentoCountOutputType without action
   */
  export type Rrhh_departamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rrhh_departamentoCountOutputType
     */
    select?: Rrhh_departamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rrhh_departamentoCountOutputType without action
   */
  export type Rrhh_departamentoCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadoWhereInput
  }


  /**
   * Count Type Rrhh_rolCountOutputType
   */

  export type Rrhh_rolCountOutputType = {
    empleados: number
  }

  export type Rrhh_rolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | Rrhh_rolCountOutputTypeCountEmpleadosArgs
  }

  // Custom InputTypes
  /**
   * Rrhh_rolCountOutputType without action
   */
  export type Rrhh_rolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rrhh_rolCountOutputType
     */
    select?: Rrhh_rolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rrhh_rolCountOutputType without action
   */
  export type Rrhh_rolCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_empleado_rolWhereInput
  }


  /**
   * Models
   */

  /**
   * Model empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id_empleado: number | null
    id_departamento: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id_empleado: number | null
    id_departamento: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id_empleado: number | null
    rut: string | null
    nombre: string | null
    apellido: string | null
    rol: string | null
    email: string | null
    telefono: string | null
    fecha_ingreso: Date | null
    id_departamento: number | null
    estado: string | null
    fecha_baja: Date | null
    motivo_baja: string | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id_empleado: number | null
    rut: string | null
    nombre: string | null
    apellido: string | null
    rol: string | null
    email: string | null
    telefono: string | null
    fecha_ingreso: Date | null
    id_departamento: number | null
    estado: string | null
    fecha_baja: Date | null
    motivo_baja: string | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id_empleado: number
    rut: number
    nombre: number
    apellido: number
    rol: number
    email: number
    telefono: number
    fecha_ingreso: number
    id_departamento: number
    estado: number
    fecha_baja: number
    motivo_baja: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id_empleado?: true
    id_departamento?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id_empleado?: true
    id_departamento?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id_empleado?: true
    rut?: true
    nombre?: true
    apellido?: true
    rol?: true
    email?: true
    telefono?: true
    fecha_ingreso?: true
    id_departamento?: true
    estado?: true
    fecha_baja?: true
    motivo_baja?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id_empleado?: true
    rut?: true
    nombre?: true
    apellido?: true
    rol?: true
    email?: true
    telefono?: true
    fecha_ingreso?: true
    id_departamento?: true
    estado?: true
    fecha_baja?: true
    motivo_baja?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id_empleado?: true
    rut?: true
    nombre?: true
    apellido?: true
    rol?: true
    email?: true
    telefono?: true
    fecha_ingreso?: true
    id_departamento?: true
    estado?: true
    fecha_baja?: true
    motivo_baja?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleado to aggregate.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type empleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadoWhereInput
    orderBy?: empleadoOrderByWithAggregationInput | empleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: empleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id_empleado: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono: string | null
    fecha_ingreso: Date
    id_departamento: number
    estado: string
    fecha_baja: Date | null
    motivo_baja: string | null
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends empleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type empleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    rut?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    email?: boolean
    telefono?: boolean
    fecha_ingreso?: boolean
    id_departamento?: boolean
    estado?: boolean
    fecha_baja?: boolean
    motivo_baja?: boolean
    ausencias?: boolean | empleado$ausenciasArgs<ExtArgs>
    roles?: boolean | empleado$rolesArgs<ExtArgs>
    usuario?: boolean | empleado$usuarioArgs<ExtArgs>
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type empleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    rut?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    email?: boolean
    telefono?: boolean
    fecha_ingreso?: boolean
    id_departamento?: boolean
    estado?: boolean
    fecha_baja?: boolean
    motivo_baja?: boolean
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type empleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    rut?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    email?: boolean
    telefono?: boolean
    fecha_ingreso?: boolean
    id_departamento?: boolean
    estado?: boolean
    fecha_baja?: boolean
    motivo_baja?: boolean
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type empleadoSelectScalar = {
    id_empleado?: boolean
    rut?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    email?: boolean
    telefono?: boolean
    fecha_ingreso?: boolean
    id_departamento?: boolean
    estado?: boolean
    fecha_baja?: boolean
    motivo_baja?: boolean
  }

  export type empleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_empleado" | "rut" | "nombre" | "apellido" | "rol" | "email" | "telefono" | "fecha_ingreso" | "id_departamento" | "estado" | "fecha_baja" | "motivo_baja", ExtArgs["result"]["empleado"]>
  export type empleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ausencias?: boolean | empleado$ausenciasArgs<ExtArgs>
    roles?: boolean | empleado$rolesArgs<ExtArgs>
    usuario?: boolean | empleado$usuarioArgs<ExtArgs>
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type empleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
  }
  export type empleadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | rrhh_departamentoDefaultArgs<ExtArgs>
  }

  export type $empleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empleado"
    objects: {
      ausencias: Prisma.$rrhh_ausenciaPayload<ExtArgs>[]
      roles: Prisma.$rrhh_empleado_rolPayload<ExtArgs>[]
      usuario: Prisma.$rrhh_usuarioPayload<ExtArgs> | null
      departamento: Prisma.$rrhh_departamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empleado: number
      rut: string
      nombre: string
      apellido: string
      rol: string
      email: string
      telefono: string | null
      fecha_ingreso: Date
      id_departamento: number
      estado: string
      fecha_baja: Date | null
      motivo_baja: string | null
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type empleadoGetPayload<S extends boolean | null | undefined | empleadoDefaultArgs> = $Result.GetResult<Prisma.$empleadoPayload, S>

  type empleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<empleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface empleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empleado'], meta: { name: 'empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {empleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empleadoFindUniqueArgs>(args: SelectSubset<T, empleadoFindUniqueArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {empleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, empleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empleadoFindFirstArgs>(args?: SelectSubset<T, empleadoFindFirstArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, empleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id_empleado`
     * const empleadoWithId_empleadoOnly = await prisma.empleado.findMany({ select: { id_empleado: true } })
     * 
     */
    findMany<T extends empleadoFindManyArgs>(args?: SelectSubset<T, empleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {empleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends empleadoCreateArgs>(args: SelectSubset<T, empleadoCreateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {empleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empleadoCreateManyArgs>(args?: SelectSubset<T, empleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {empleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `id_empleado`
     * const empleadoWithId_empleadoOnly = await prisma.empleado.createManyAndReturn({
     *   select: { id_empleado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends empleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, empleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleado.
     * @param {empleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends empleadoDeleteArgs>(args: SelectSubset<T, empleadoDeleteArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {empleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends empleadoUpdateArgs>(args: SelectSubset<T, empleadoUpdateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {empleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empleadoDeleteManyArgs>(args?: SelectSubset<T, empleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends empleadoUpdateManyArgs>(args: SelectSubset<T, empleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {empleadoUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `id_empleado`
     * const empleadoWithId_empleadoOnly = await prisma.empleado.updateManyAndReturn({
     *   select: { id_empleado: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends empleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, empleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleado.
     * @param {empleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends empleadoUpsertArgs>(args: SelectSubset<T, empleadoUpsertArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends empleadoCountArgs>(
      args?: Subset<T, empleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends empleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empleadoGroupByArgs['orderBy'] }
        : { orderBy?: empleadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, empleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empleado model
   */
  readonly fields: empleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ausencias<T extends empleado$ausenciasArgs<ExtArgs> = {}>(args?: Subset<T, empleado$ausenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends empleado$rolesArgs<ExtArgs> = {}>(args?: Subset<T, empleado$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends empleado$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, empleado$usuarioArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departamento<T extends rrhh_departamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rrhh_departamentoDefaultArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the empleado model
   */
  interface empleadoFieldRefs {
    readonly id_empleado: FieldRef<"empleado", 'Int'>
    readonly rut: FieldRef<"empleado", 'String'>
    readonly nombre: FieldRef<"empleado", 'String'>
    readonly apellido: FieldRef<"empleado", 'String'>
    readonly rol: FieldRef<"empleado", 'String'>
    readonly email: FieldRef<"empleado", 'String'>
    readonly telefono: FieldRef<"empleado", 'String'>
    readonly fecha_ingreso: FieldRef<"empleado", 'DateTime'>
    readonly id_departamento: FieldRef<"empleado", 'Int'>
    readonly estado: FieldRef<"empleado", 'String'>
    readonly fecha_baja: FieldRef<"empleado", 'DateTime'>
    readonly motivo_baja: FieldRef<"empleado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * empleado findUnique
   */
  export type empleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findUniqueOrThrow
   */
  export type empleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findFirst
   */
  export type empleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findFirstOrThrow
   */
  export type empleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findMany
   */
  export type empleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado create
   */
  export type empleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a empleado.
     */
    data: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
  }

  /**
   * empleado createMany
   */
  export type empleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empleados.
     */
    data: empleadoCreateManyInput | empleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empleado createManyAndReturn
   */
  export type empleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * The data used to create many empleados.
     */
    data: empleadoCreateManyInput | empleadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * empleado update
   */
  export type empleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a empleado.
     */
    data: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
    /**
     * Choose, which empleado to update.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado updateMany
   */
  export type empleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadoWhereInput
    /**
     * Limit how many empleados to update.
     */
    limit?: number
  }

  /**
   * empleado updateManyAndReturn
   */
  export type empleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadoWhereInput
    /**
     * Limit how many empleados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * empleado upsert
   */
  export type empleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the empleado to update in case it exists.
     */
    where: empleadoWhereUniqueInput
    /**
     * In case the empleado found by the `where` argument doesn't exist, create a new empleado with this data.
     */
    create: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
    /**
     * In case the empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
  }

  /**
   * empleado delete
   */
  export type empleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter which empleado to delete.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado deleteMany
   */
  export type empleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleados to delete
     */
    where?: empleadoWhereInput
    /**
     * Limit how many empleados to delete.
     */
    limit?: number
  }

  /**
   * empleado.ausencias
   */
  export type empleado$ausenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    where?: rrhh_ausenciaWhereInput
    orderBy?: rrhh_ausenciaOrderByWithRelationInput | rrhh_ausenciaOrderByWithRelationInput[]
    cursor?: rrhh_ausenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rrhh_ausenciaScalarFieldEnum | Rrhh_ausenciaScalarFieldEnum[]
  }

  /**
   * empleado.roles
   */
  export type empleado$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    where?: rrhh_empleado_rolWhereInput
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    cursor?: rrhh_empleado_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rrhh_empleado_rolScalarFieldEnum | Rrhh_empleado_rolScalarFieldEnum[]
  }

  /**
   * empleado.usuario
   */
  export type empleado$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    where?: rrhh_usuarioWhereInput
  }

  /**
   * empleado without action
   */
  export type empleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
  }


  /**
   * Model rrhh_departamento
   */

  export type AggregateRrhh_departamento = {
    _count: Rrhh_departamentoCountAggregateOutputType | null
    _avg: Rrhh_departamentoAvgAggregateOutputType | null
    _sum: Rrhh_departamentoSumAggregateOutputType | null
    _min: Rrhh_departamentoMinAggregateOutputType | null
    _max: Rrhh_departamentoMaxAggregateOutputType | null
  }

  export type Rrhh_departamentoAvgAggregateOutputType = {
    id_departamento: number | null
  }

  export type Rrhh_departamentoSumAggregateOutputType = {
    id_departamento: number | null
  }

  export type Rrhh_departamentoMinAggregateOutputType = {
    id_departamento: number | null
    nombre: string | null
  }

  export type Rrhh_departamentoMaxAggregateOutputType = {
    id_departamento: number | null
    nombre: string | null
  }

  export type Rrhh_departamentoCountAggregateOutputType = {
    id_departamento: number
    nombre: number
    _all: number
  }


  export type Rrhh_departamentoAvgAggregateInputType = {
    id_departamento?: true
  }

  export type Rrhh_departamentoSumAggregateInputType = {
    id_departamento?: true
  }

  export type Rrhh_departamentoMinAggregateInputType = {
    id_departamento?: true
    nombre?: true
  }

  export type Rrhh_departamentoMaxAggregateInputType = {
    id_departamento?: true
    nombre?: true
  }

  export type Rrhh_departamentoCountAggregateInputType = {
    id_departamento?: true
    nombre?: true
    _all?: true
  }

  export type Rrhh_departamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_departamento to aggregate.
     */
    where?: rrhh_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_departamentos to fetch.
     */
    orderBy?: rrhh_departamentoOrderByWithRelationInput | rrhh_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rrhh_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rrhh_departamentos
    **/
    _count?: true | Rrhh_departamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rrhh_departamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rrhh_departamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rrhh_departamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rrhh_departamentoMaxAggregateInputType
  }

  export type GetRrhh_departamentoAggregateType<T extends Rrhh_departamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateRrhh_departamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRrhh_departamento[P]>
      : GetScalarType<T[P], AggregateRrhh_departamento[P]>
  }




  export type rrhh_departamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_departamentoWhereInput
    orderBy?: rrhh_departamentoOrderByWithAggregationInput | rrhh_departamentoOrderByWithAggregationInput[]
    by: Rrhh_departamentoScalarFieldEnum[] | Rrhh_departamentoScalarFieldEnum
    having?: rrhh_departamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rrhh_departamentoCountAggregateInputType | true
    _avg?: Rrhh_departamentoAvgAggregateInputType
    _sum?: Rrhh_departamentoSumAggregateInputType
    _min?: Rrhh_departamentoMinAggregateInputType
    _max?: Rrhh_departamentoMaxAggregateInputType
  }

  export type Rrhh_departamentoGroupByOutputType = {
    id_departamento: number
    nombre: string
    _count: Rrhh_departamentoCountAggregateOutputType | null
    _avg: Rrhh_departamentoAvgAggregateOutputType | null
    _sum: Rrhh_departamentoSumAggregateOutputType | null
    _min: Rrhh_departamentoMinAggregateOutputType | null
    _max: Rrhh_departamentoMaxAggregateOutputType | null
  }

  type GetRrhh_departamentoGroupByPayload<T extends rrhh_departamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rrhh_departamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rrhh_departamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rrhh_departamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Rrhh_departamentoGroupByOutputType[P]>
        }
      >
    >


  export type rrhh_departamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
    empleados?: boolean | rrhh_departamento$empleadosArgs<ExtArgs>
    _count?: boolean | Rrhh_departamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_departamento"]>

  export type rrhh_departamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rrhh_departamento"]>

  export type rrhh_departamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rrhh_departamento"]>

  export type rrhh_departamentoSelectScalar = {
    id_departamento?: boolean
    nombre?: boolean
  }

  export type rrhh_departamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_departamento" | "nombre", ExtArgs["result"]["rrhh_departamento"]>
  export type rrhh_departamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | rrhh_departamento$empleadosArgs<ExtArgs>
    _count?: boolean | Rrhh_departamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rrhh_departamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rrhh_departamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rrhh_departamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rrhh_departamento"
    objects: {
      empleados: Prisma.$empleadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_departamento: number
      nombre: string
    }, ExtArgs["result"]["rrhh_departamento"]>
    composites: {}
  }

  type rrhh_departamentoGetPayload<S extends boolean | null | undefined | rrhh_departamentoDefaultArgs> = $Result.GetResult<Prisma.$rrhh_departamentoPayload, S>

  type rrhh_departamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rrhh_departamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rrhh_departamentoCountAggregateInputType | true
    }

  export interface rrhh_departamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rrhh_departamento'], meta: { name: 'rrhh_departamento' } }
    /**
     * Find zero or one Rrhh_departamento that matches the filter.
     * @param {rrhh_departamentoFindUniqueArgs} args - Arguments to find a Rrhh_departamento
     * @example
     * // Get one Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rrhh_departamentoFindUniqueArgs>(args: SelectSubset<T, rrhh_departamentoFindUniqueArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rrhh_departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rrhh_departamentoFindUniqueOrThrowArgs} args - Arguments to find a Rrhh_departamento
     * @example
     * // Get one Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rrhh_departamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, rrhh_departamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoFindFirstArgs} args - Arguments to find a Rrhh_departamento
     * @example
     * // Get one Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rrhh_departamentoFindFirstArgs>(args?: SelectSubset<T, rrhh_departamentoFindFirstArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoFindFirstOrThrowArgs} args - Arguments to find a Rrhh_departamento
     * @example
     * // Get one Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rrhh_departamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, rrhh_departamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rrhh_departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rrhh_departamentos
     * const rrhh_departamentos = await prisma.rrhh_departamento.findMany()
     * 
     * // Get first 10 Rrhh_departamentos
     * const rrhh_departamentos = await prisma.rrhh_departamento.findMany({ take: 10 })
     * 
     * // Only select the `id_departamento`
     * const rrhh_departamentoWithId_departamentoOnly = await prisma.rrhh_departamento.findMany({ select: { id_departamento: true } })
     * 
     */
    findMany<T extends rrhh_departamentoFindManyArgs>(args?: SelectSubset<T, rrhh_departamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rrhh_departamento.
     * @param {rrhh_departamentoCreateArgs} args - Arguments to create a Rrhh_departamento.
     * @example
     * // Create one Rrhh_departamento
     * const Rrhh_departamento = await prisma.rrhh_departamento.create({
     *   data: {
     *     // ... data to create a Rrhh_departamento
     *   }
     * })
     * 
     */
    create<T extends rrhh_departamentoCreateArgs>(args: SelectSubset<T, rrhh_departamentoCreateArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rrhh_departamentos.
     * @param {rrhh_departamentoCreateManyArgs} args - Arguments to create many Rrhh_departamentos.
     * @example
     * // Create many Rrhh_departamentos
     * const rrhh_departamento = await prisma.rrhh_departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rrhh_departamentoCreateManyArgs>(args?: SelectSubset<T, rrhh_departamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rrhh_departamentos and returns the data saved in the database.
     * @param {rrhh_departamentoCreateManyAndReturnArgs} args - Arguments to create many Rrhh_departamentos.
     * @example
     * // Create many Rrhh_departamentos
     * const rrhh_departamento = await prisma.rrhh_departamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rrhh_departamentos and only return the `id_departamento`
     * const rrhh_departamentoWithId_departamentoOnly = await prisma.rrhh_departamento.createManyAndReturn({
     *   select: { id_departamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rrhh_departamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, rrhh_departamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rrhh_departamento.
     * @param {rrhh_departamentoDeleteArgs} args - Arguments to delete one Rrhh_departamento.
     * @example
     * // Delete one Rrhh_departamento
     * const Rrhh_departamento = await prisma.rrhh_departamento.delete({
     *   where: {
     *     // ... filter to delete one Rrhh_departamento
     *   }
     * })
     * 
     */
    delete<T extends rrhh_departamentoDeleteArgs>(args: SelectSubset<T, rrhh_departamentoDeleteArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rrhh_departamento.
     * @param {rrhh_departamentoUpdateArgs} args - Arguments to update one Rrhh_departamento.
     * @example
     * // Update one Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rrhh_departamentoUpdateArgs>(args: SelectSubset<T, rrhh_departamentoUpdateArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rrhh_departamentos.
     * @param {rrhh_departamentoDeleteManyArgs} args - Arguments to filter Rrhh_departamentos to delete.
     * @example
     * // Delete a few Rrhh_departamentos
     * const { count } = await prisma.rrhh_departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rrhh_departamentoDeleteManyArgs>(args?: SelectSubset<T, rrhh_departamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rrhh_departamentos
     * const rrhh_departamento = await prisma.rrhh_departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rrhh_departamentoUpdateManyArgs>(args: SelectSubset<T, rrhh_departamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_departamentos and returns the data updated in the database.
     * @param {rrhh_departamentoUpdateManyAndReturnArgs} args - Arguments to update many Rrhh_departamentos.
     * @example
     * // Update many Rrhh_departamentos
     * const rrhh_departamento = await prisma.rrhh_departamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rrhh_departamentos and only return the `id_departamento`
     * const rrhh_departamentoWithId_departamentoOnly = await prisma.rrhh_departamento.updateManyAndReturn({
     *   select: { id_departamento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rrhh_departamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, rrhh_departamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rrhh_departamento.
     * @param {rrhh_departamentoUpsertArgs} args - Arguments to update or create a Rrhh_departamento.
     * @example
     * // Update or create a Rrhh_departamento
     * const rrhh_departamento = await prisma.rrhh_departamento.upsert({
     *   create: {
     *     // ... data to create a Rrhh_departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rrhh_departamento we want to update
     *   }
     * })
     */
    upsert<T extends rrhh_departamentoUpsertArgs>(args: SelectSubset<T, rrhh_departamentoUpsertArgs<ExtArgs>>): Prisma__rrhh_departamentoClient<$Result.GetResult<Prisma.$rrhh_departamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rrhh_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoCountArgs} args - Arguments to filter Rrhh_departamentos to count.
     * @example
     * // Count the number of Rrhh_departamentos
     * const count = await prisma.rrhh_departamento.count({
     *   where: {
     *     // ... the filter for the Rrhh_departamentos we want to count
     *   }
     * })
    **/
    count<T extends rrhh_departamentoCountArgs>(
      args?: Subset<T, rrhh_departamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rrhh_departamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rrhh_departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rrhh_departamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rrhh_departamentoAggregateArgs>(args: Subset<T, Rrhh_departamentoAggregateArgs>): Prisma.PrismaPromise<GetRrhh_departamentoAggregateType<T>>

    /**
     * Group by Rrhh_departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_departamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rrhh_departamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rrhh_departamentoGroupByArgs['orderBy'] }
        : { orderBy?: rrhh_departamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rrhh_departamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRrhh_departamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rrhh_departamento model
   */
  readonly fields: rrhh_departamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rrhh_departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rrhh_departamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends rrhh_departamento$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, rrhh_departamento$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rrhh_departamento model
   */
  interface rrhh_departamentoFieldRefs {
    readonly id_departamento: FieldRef<"rrhh_departamento", 'Int'>
    readonly nombre: FieldRef<"rrhh_departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rrhh_departamento findUnique
   */
  export type rrhh_departamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_departamento to fetch.
     */
    where: rrhh_departamentoWhereUniqueInput
  }

  /**
   * rrhh_departamento findUniqueOrThrow
   */
  export type rrhh_departamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_departamento to fetch.
     */
    where: rrhh_departamentoWhereUniqueInput
  }

  /**
   * rrhh_departamento findFirst
   */
  export type rrhh_departamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_departamento to fetch.
     */
    where?: rrhh_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_departamentos to fetch.
     */
    orderBy?: rrhh_departamentoOrderByWithRelationInput | rrhh_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_departamentos.
     */
    cursor?: rrhh_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_departamentos.
     */
    distinct?: Rrhh_departamentoScalarFieldEnum | Rrhh_departamentoScalarFieldEnum[]
  }

  /**
   * rrhh_departamento findFirstOrThrow
   */
  export type rrhh_departamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_departamento to fetch.
     */
    where?: rrhh_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_departamentos to fetch.
     */
    orderBy?: rrhh_departamentoOrderByWithRelationInput | rrhh_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_departamentos.
     */
    cursor?: rrhh_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_departamentos.
     */
    distinct?: Rrhh_departamentoScalarFieldEnum | Rrhh_departamentoScalarFieldEnum[]
  }

  /**
   * rrhh_departamento findMany
   */
  export type rrhh_departamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_departamentos to fetch.
     */
    where?: rrhh_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_departamentos to fetch.
     */
    orderBy?: rrhh_departamentoOrderByWithRelationInput | rrhh_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rrhh_departamentos.
     */
    cursor?: rrhh_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_departamentos.
     */
    skip?: number
    distinct?: Rrhh_departamentoScalarFieldEnum | Rrhh_departamentoScalarFieldEnum[]
  }

  /**
   * rrhh_departamento create
   */
  export type rrhh_departamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a rrhh_departamento.
     */
    data: XOR<rrhh_departamentoCreateInput, rrhh_departamentoUncheckedCreateInput>
  }

  /**
   * rrhh_departamento createMany
   */
  export type rrhh_departamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rrhh_departamentos.
     */
    data: rrhh_departamentoCreateManyInput | rrhh_departamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_departamento createManyAndReturn
   */
  export type rrhh_departamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * The data used to create many rrhh_departamentos.
     */
    data: rrhh_departamentoCreateManyInput | rrhh_departamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_departamento update
   */
  export type rrhh_departamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a rrhh_departamento.
     */
    data: XOR<rrhh_departamentoUpdateInput, rrhh_departamentoUncheckedUpdateInput>
    /**
     * Choose, which rrhh_departamento to update.
     */
    where: rrhh_departamentoWhereUniqueInput
  }

  /**
   * rrhh_departamento updateMany
   */
  export type rrhh_departamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rrhh_departamentos.
     */
    data: XOR<rrhh_departamentoUpdateManyMutationInput, rrhh_departamentoUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_departamentos to update
     */
    where?: rrhh_departamentoWhereInput
    /**
     * Limit how many rrhh_departamentos to update.
     */
    limit?: number
  }

  /**
   * rrhh_departamento updateManyAndReturn
   */
  export type rrhh_departamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * The data used to update rrhh_departamentos.
     */
    data: XOR<rrhh_departamentoUpdateManyMutationInput, rrhh_departamentoUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_departamentos to update
     */
    where?: rrhh_departamentoWhereInput
    /**
     * Limit how many rrhh_departamentos to update.
     */
    limit?: number
  }

  /**
   * rrhh_departamento upsert
   */
  export type rrhh_departamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the rrhh_departamento to update in case it exists.
     */
    where: rrhh_departamentoWhereUniqueInput
    /**
     * In case the rrhh_departamento found by the `where` argument doesn't exist, create a new rrhh_departamento with this data.
     */
    create: XOR<rrhh_departamentoCreateInput, rrhh_departamentoUncheckedCreateInput>
    /**
     * In case the rrhh_departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rrhh_departamentoUpdateInput, rrhh_departamentoUncheckedUpdateInput>
  }

  /**
   * rrhh_departamento delete
   */
  export type rrhh_departamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
    /**
     * Filter which rrhh_departamento to delete.
     */
    where: rrhh_departamentoWhereUniqueInput
  }

  /**
   * rrhh_departamento deleteMany
   */
  export type rrhh_departamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_departamentos to delete
     */
    where?: rrhh_departamentoWhereInput
    /**
     * Limit how many rrhh_departamentos to delete.
     */
    limit?: number
  }

  /**
   * rrhh_departamento.empleados
   */
  export type rrhh_departamento$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empleado
     */
    omit?: empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    where?: empleadoWhereInput
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    cursor?: empleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * rrhh_departamento without action
   */
  export type rrhh_departamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_departamento
     */
    select?: rrhh_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_departamento
     */
    omit?: rrhh_departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_departamentoInclude<ExtArgs> | null
  }


  /**
   * Model rrhh_usuario
   */

  export type AggregateRrhh_usuario = {
    _count: Rrhh_usuarioCountAggregateOutputType | null
    _avg: Rrhh_usuarioAvgAggregateOutputType | null
    _sum: Rrhh_usuarioSumAggregateOutputType | null
    _min: Rrhh_usuarioMinAggregateOutputType | null
    _max: Rrhh_usuarioMaxAggregateOutputType | null
  }

  export type Rrhh_usuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_empleado: number | null
  }

  export type Rrhh_usuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_empleado: number | null
  }

  export type Rrhh_usuarioMinAggregateOutputType = {
    id_usuario: number | null
    id_empleado: number | null
    password_hash: string | null
    activo: boolean | null
  }

  export type Rrhh_usuarioMaxAggregateOutputType = {
    id_usuario: number | null
    id_empleado: number | null
    password_hash: string | null
    activo: boolean | null
  }

  export type Rrhh_usuarioCountAggregateOutputType = {
    id_usuario: number
    id_empleado: number
    password_hash: number
    activo: number
    _all: number
  }


  export type Rrhh_usuarioAvgAggregateInputType = {
    id_usuario?: true
    id_empleado?: true
  }

  export type Rrhh_usuarioSumAggregateInputType = {
    id_usuario?: true
    id_empleado?: true
  }

  export type Rrhh_usuarioMinAggregateInputType = {
    id_usuario?: true
    id_empleado?: true
    password_hash?: true
    activo?: true
  }

  export type Rrhh_usuarioMaxAggregateInputType = {
    id_usuario?: true
    id_empleado?: true
    password_hash?: true
    activo?: true
  }

  export type Rrhh_usuarioCountAggregateInputType = {
    id_usuario?: true
    id_empleado?: true
    password_hash?: true
    activo?: true
    _all?: true
  }

  export type Rrhh_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_usuario to aggregate.
     */
    where?: rrhh_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_usuarios to fetch.
     */
    orderBy?: rrhh_usuarioOrderByWithRelationInput | rrhh_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rrhh_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rrhh_usuarios
    **/
    _count?: true | Rrhh_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rrhh_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rrhh_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rrhh_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rrhh_usuarioMaxAggregateInputType
  }

  export type GetRrhh_usuarioAggregateType<T extends Rrhh_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRrhh_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRrhh_usuario[P]>
      : GetScalarType<T[P], AggregateRrhh_usuario[P]>
  }




  export type rrhh_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_usuarioWhereInput
    orderBy?: rrhh_usuarioOrderByWithAggregationInput | rrhh_usuarioOrderByWithAggregationInput[]
    by: Rrhh_usuarioScalarFieldEnum[] | Rrhh_usuarioScalarFieldEnum
    having?: rrhh_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rrhh_usuarioCountAggregateInputType | true
    _avg?: Rrhh_usuarioAvgAggregateInputType
    _sum?: Rrhh_usuarioSumAggregateInputType
    _min?: Rrhh_usuarioMinAggregateInputType
    _max?: Rrhh_usuarioMaxAggregateInputType
  }

  export type Rrhh_usuarioGroupByOutputType = {
    id_usuario: number
    id_empleado: number
    password_hash: string
    activo: boolean
    _count: Rrhh_usuarioCountAggregateOutputType | null
    _avg: Rrhh_usuarioAvgAggregateOutputType | null
    _sum: Rrhh_usuarioSumAggregateOutputType | null
    _min: Rrhh_usuarioMinAggregateOutputType | null
    _max: Rrhh_usuarioMaxAggregateOutputType | null
  }

  type GetRrhh_usuarioGroupByPayload<T extends rrhh_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rrhh_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rrhh_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rrhh_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Rrhh_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type rrhh_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_empleado?: boolean
    password_hash?: boolean
    activo?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_usuario"]>

  export type rrhh_usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_empleado?: boolean
    password_hash?: boolean
    activo?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_usuario"]>

  export type rrhh_usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_empleado?: boolean
    password_hash?: boolean
    activo?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_usuario"]>

  export type rrhh_usuarioSelectScalar = {
    id_usuario?: boolean
    id_empleado?: boolean
    password_hash?: boolean
    activo?: boolean
  }

  export type rrhh_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_empleado" | "password_hash" | "activo", ExtArgs["result"]["rrhh_usuario"]>
  export type rrhh_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }
  export type rrhh_usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }
  export type rrhh_usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $rrhh_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rrhh_usuario"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_empleado: number
      password_hash: string
      activo: boolean
    }, ExtArgs["result"]["rrhh_usuario"]>
    composites: {}
  }

  type rrhh_usuarioGetPayload<S extends boolean | null | undefined | rrhh_usuarioDefaultArgs> = $Result.GetResult<Prisma.$rrhh_usuarioPayload, S>

  type rrhh_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rrhh_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rrhh_usuarioCountAggregateInputType | true
    }

  export interface rrhh_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rrhh_usuario'], meta: { name: 'rrhh_usuario' } }
    /**
     * Find zero or one Rrhh_usuario that matches the filter.
     * @param {rrhh_usuarioFindUniqueArgs} args - Arguments to find a Rrhh_usuario
     * @example
     * // Get one Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rrhh_usuarioFindUniqueArgs>(args: SelectSubset<T, rrhh_usuarioFindUniqueArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rrhh_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rrhh_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Rrhh_usuario
     * @example
     * // Get one Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rrhh_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, rrhh_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioFindFirstArgs} args - Arguments to find a Rrhh_usuario
     * @example
     * // Get one Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rrhh_usuarioFindFirstArgs>(args?: SelectSubset<T, rrhh_usuarioFindFirstArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioFindFirstOrThrowArgs} args - Arguments to find a Rrhh_usuario
     * @example
     * // Get one Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rrhh_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, rrhh_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rrhh_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rrhh_usuarios
     * const rrhh_usuarios = await prisma.rrhh_usuario.findMany()
     * 
     * // Get first 10 Rrhh_usuarios
     * const rrhh_usuarios = await prisma.rrhh_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const rrhh_usuarioWithId_usuarioOnly = await prisma.rrhh_usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends rrhh_usuarioFindManyArgs>(args?: SelectSubset<T, rrhh_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rrhh_usuario.
     * @param {rrhh_usuarioCreateArgs} args - Arguments to create a Rrhh_usuario.
     * @example
     * // Create one Rrhh_usuario
     * const Rrhh_usuario = await prisma.rrhh_usuario.create({
     *   data: {
     *     // ... data to create a Rrhh_usuario
     *   }
     * })
     * 
     */
    create<T extends rrhh_usuarioCreateArgs>(args: SelectSubset<T, rrhh_usuarioCreateArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rrhh_usuarios.
     * @param {rrhh_usuarioCreateManyArgs} args - Arguments to create many Rrhh_usuarios.
     * @example
     * // Create many Rrhh_usuarios
     * const rrhh_usuario = await prisma.rrhh_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rrhh_usuarioCreateManyArgs>(args?: SelectSubset<T, rrhh_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rrhh_usuarios and returns the data saved in the database.
     * @param {rrhh_usuarioCreateManyAndReturnArgs} args - Arguments to create many Rrhh_usuarios.
     * @example
     * // Create many Rrhh_usuarios
     * const rrhh_usuario = await prisma.rrhh_usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rrhh_usuarios and only return the `id_usuario`
     * const rrhh_usuarioWithId_usuarioOnly = await prisma.rrhh_usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rrhh_usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, rrhh_usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rrhh_usuario.
     * @param {rrhh_usuarioDeleteArgs} args - Arguments to delete one Rrhh_usuario.
     * @example
     * // Delete one Rrhh_usuario
     * const Rrhh_usuario = await prisma.rrhh_usuario.delete({
     *   where: {
     *     // ... filter to delete one Rrhh_usuario
     *   }
     * })
     * 
     */
    delete<T extends rrhh_usuarioDeleteArgs>(args: SelectSubset<T, rrhh_usuarioDeleteArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rrhh_usuario.
     * @param {rrhh_usuarioUpdateArgs} args - Arguments to update one Rrhh_usuario.
     * @example
     * // Update one Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rrhh_usuarioUpdateArgs>(args: SelectSubset<T, rrhh_usuarioUpdateArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rrhh_usuarios.
     * @param {rrhh_usuarioDeleteManyArgs} args - Arguments to filter Rrhh_usuarios to delete.
     * @example
     * // Delete a few Rrhh_usuarios
     * const { count } = await prisma.rrhh_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rrhh_usuarioDeleteManyArgs>(args?: SelectSubset<T, rrhh_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rrhh_usuarios
     * const rrhh_usuario = await prisma.rrhh_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rrhh_usuarioUpdateManyArgs>(args: SelectSubset<T, rrhh_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_usuarios and returns the data updated in the database.
     * @param {rrhh_usuarioUpdateManyAndReturnArgs} args - Arguments to update many Rrhh_usuarios.
     * @example
     * // Update many Rrhh_usuarios
     * const rrhh_usuario = await prisma.rrhh_usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rrhh_usuarios and only return the `id_usuario`
     * const rrhh_usuarioWithId_usuarioOnly = await prisma.rrhh_usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rrhh_usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, rrhh_usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rrhh_usuario.
     * @param {rrhh_usuarioUpsertArgs} args - Arguments to update or create a Rrhh_usuario.
     * @example
     * // Update or create a Rrhh_usuario
     * const rrhh_usuario = await prisma.rrhh_usuario.upsert({
     *   create: {
     *     // ... data to create a Rrhh_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rrhh_usuario we want to update
     *   }
     * })
     */
    upsert<T extends rrhh_usuarioUpsertArgs>(args: SelectSubset<T, rrhh_usuarioUpsertArgs<ExtArgs>>): Prisma__rrhh_usuarioClient<$Result.GetResult<Prisma.$rrhh_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rrhh_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioCountArgs} args - Arguments to filter Rrhh_usuarios to count.
     * @example
     * // Count the number of Rrhh_usuarios
     * const count = await prisma.rrhh_usuario.count({
     *   where: {
     *     // ... the filter for the Rrhh_usuarios we want to count
     *   }
     * })
    **/
    count<T extends rrhh_usuarioCountArgs>(
      args?: Subset<T, rrhh_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rrhh_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rrhh_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rrhh_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rrhh_usuarioAggregateArgs>(args: Subset<T, Rrhh_usuarioAggregateArgs>): Prisma.PrismaPromise<GetRrhh_usuarioAggregateType<T>>

    /**
     * Group by Rrhh_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rrhh_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rrhh_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: rrhh_usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rrhh_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRrhh_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rrhh_usuario model
   */
  readonly fields: rrhh_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rrhh_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rrhh_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rrhh_usuario model
   */
  interface rrhh_usuarioFieldRefs {
    readonly id_usuario: FieldRef<"rrhh_usuario", 'Int'>
    readonly id_empleado: FieldRef<"rrhh_usuario", 'Int'>
    readonly password_hash: FieldRef<"rrhh_usuario", 'String'>
    readonly activo: FieldRef<"rrhh_usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * rrhh_usuario findUnique
   */
  export type rrhh_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_usuario to fetch.
     */
    where: rrhh_usuarioWhereUniqueInput
  }

  /**
   * rrhh_usuario findUniqueOrThrow
   */
  export type rrhh_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_usuario to fetch.
     */
    where: rrhh_usuarioWhereUniqueInput
  }

  /**
   * rrhh_usuario findFirst
   */
  export type rrhh_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_usuario to fetch.
     */
    where?: rrhh_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_usuarios to fetch.
     */
    orderBy?: rrhh_usuarioOrderByWithRelationInput | rrhh_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_usuarios.
     */
    cursor?: rrhh_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_usuarios.
     */
    distinct?: Rrhh_usuarioScalarFieldEnum | Rrhh_usuarioScalarFieldEnum[]
  }

  /**
   * rrhh_usuario findFirstOrThrow
   */
  export type rrhh_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_usuario to fetch.
     */
    where?: rrhh_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_usuarios to fetch.
     */
    orderBy?: rrhh_usuarioOrderByWithRelationInput | rrhh_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_usuarios.
     */
    cursor?: rrhh_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_usuarios.
     */
    distinct?: Rrhh_usuarioScalarFieldEnum | Rrhh_usuarioScalarFieldEnum[]
  }

  /**
   * rrhh_usuario findMany
   */
  export type rrhh_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_usuarios to fetch.
     */
    where?: rrhh_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_usuarios to fetch.
     */
    orderBy?: rrhh_usuarioOrderByWithRelationInput | rrhh_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rrhh_usuarios.
     */
    cursor?: rrhh_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_usuarios.
     */
    skip?: number
    distinct?: Rrhh_usuarioScalarFieldEnum | Rrhh_usuarioScalarFieldEnum[]
  }

  /**
   * rrhh_usuario create
   */
  export type rrhh_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a rrhh_usuario.
     */
    data: XOR<rrhh_usuarioCreateInput, rrhh_usuarioUncheckedCreateInput>
  }

  /**
   * rrhh_usuario createMany
   */
  export type rrhh_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rrhh_usuarios.
     */
    data: rrhh_usuarioCreateManyInput | rrhh_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_usuario createManyAndReturn
   */
  export type rrhh_usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many rrhh_usuarios.
     */
    data: rrhh_usuarioCreateManyInput | rrhh_usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_usuario update
   */
  export type rrhh_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a rrhh_usuario.
     */
    data: XOR<rrhh_usuarioUpdateInput, rrhh_usuarioUncheckedUpdateInput>
    /**
     * Choose, which rrhh_usuario to update.
     */
    where: rrhh_usuarioWhereUniqueInput
  }

  /**
   * rrhh_usuario updateMany
   */
  export type rrhh_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rrhh_usuarios.
     */
    data: XOR<rrhh_usuarioUpdateManyMutationInput, rrhh_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_usuarios to update
     */
    where?: rrhh_usuarioWhereInput
    /**
     * Limit how many rrhh_usuarios to update.
     */
    limit?: number
  }

  /**
   * rrhh_usuario updateManyAndReturn
   */
  export type rrhh_usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * The data used to update rrhh_usuarios.
     */
    data: XOR<rrhh_usuarioUpdateManyMutationInput, rrhh_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_usuarios to update
     */
    where?: rrhh_usuarioWhereInput
    /**
     * Limit how many rrhh_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_usuario upsert
   */
  export type rrhh_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the rrhh_usuario to update in case it exists.
     */
    where: rrhh_usuarioWhereUniqueInput
    /**
     * In case the rrhh_usuario found by the `where` argument doesn't exist, create a new rrhh_usuario with this data.
     */
    create: XOR<rrhh_usuarioCreateInput, rrhh_usuarioUncheckedCreateInput>
    /**
     * In case the rrhh_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rrhh_usuarioUpdateInput, rrhh_usuarioUncheckedUpdateInput>
  }

  /**
   * rrhh_usuario delete
   */
  export type rrhh_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
    /**
     * Filter which rrhh_usuario to delete.
     */
    where: rrhh_usuarioWhereUniqueInput
  }

  /**
   * rrhh_usuario deleteMany
   */
  export type rrhh_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_usuarios to delete
     */
    where?: rrhh_usuarioWhereInput
    /**
     * Limit how many rrhh_usuarios to delete.
     */
    limit?: number
  }

  /**
   * rrhh_usuario without action
   */
  export type rrhh_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_usuario
     */
    select?: rrhh_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_usuario
     */
    omit?: rrhh_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model rrhh_rol
   */

  export type AggregateRrhh_rol = {
    _count: Rrhh_rolCountAggregateOutputType | null
    _avg: Rrhh_rolAvgAggregateOutputType | null
    _sum: Rrhh_rolSumAggregateOutputType | null
    _min: Rrhh_rolMinAggregateOutputType | null
    _max: Rrhh_rolMaxAggregateOutputType | null
  }

  export type Rrhh_rolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type Rrhh_rolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type Rrhh_rolMinAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type Rrhh_rolMaxAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type Rrhh_rolCountAggregateOutputType = {
    id_rol: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type Rrhh_rolAvgAggregateInputType = {
    id_rol?: true
  }

  export type Rrhh_rolSumAggregateInputType = {
    id_rol?: true
  }

  export type Rrhh_rolMinAggregateInputType = {
    id_rol?: true
    nombre?: true
    descripcion?: true
  }

  export type Rrhh_rolMaxAggregateInputType = {
    id_rol?: true
    nombre?: true
    descripcion?: true
  }

  export type Rrhh_rolCountAggregateInputType = {
    id_rol?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type Rrhh_rolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_rol to aggregate.
     */
    where?: rrhh_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_rols to fetch.
     */
    orderBy?: rrhh_rolOrderByWithRelationInput | rrhh_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rrhh_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rrhh_rols
    **/
    _count?: true | Rrhh_rolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rrhh_rolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rrhh_rolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rrhh_rolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rrhh_rolMaxAggregateInputType
  }

  export type GetRrhh_rolAggregateType<T extends Rrhh_rolAggregateArgs> = {
        [P in keyof T & keyof AggregateRrhh_rol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRrhh_rol[P]>
      : GetScalarType<T[P], AggregateRrhh_rol[P]>
  }




  export type rrhh_rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_rolWhereInput
    orderBy?: rrhh_rolOrderByWithAggregationInput | rrhh_rolOrderByWithAggregationInput[]
    by: Rrhh_rolScalarFieldEnum[] | Rrhh_rolScalarFieldEnum
    having?: rrhh_rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rrhh_rolCountAggregateInputType | true
    _avg?: Rrhh_rolAvgAggregateInputType
    _sum?: Rrhh_rolSumAggregateInputType
    _min?: Rrhh_rolMinAggregateInputType
    _max?: Rrhh_rolMaxAggregateInputType
  }

  export type Rrhh_rolGroupByOutputType = {
    id_rol: number
    nombre: string
    descripcion: string | null
    _count: Rrhh_rolCountAggregateOutputType | null
    _avg: Rrhh_rolAvgAggregateOutputType | null
    _sum: Rrhh_rolSumAggregateOutputType | null
    _min: Rrhh_rolMinAggregateOutputType | null
    _max: Rrhh_rolMaxAggregateOutputType | null
  }

  type GetRrhh_rolGroupByPayload<T extends rrhh_rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rrhh_rolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rrhh_rolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rrhh_rolGroupByOutputType[P]>
            : GetScalarType<T[P], Rrhh_rolGroupByOutputType[P]>
        }
      >
    >


  export type rrhh_rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
    descripcion?: boolean
    empleados?: boolean | rrhh_rol$empleadosArgs<ExtArgs>
    _count?: boolean | Rrhh_rolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_rol"]>

  export type rrhh_rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rrhh_rol"]>

  export type rrhh_rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rrhh_rol"]>

  export type rrhh_rolSelectScalar = {
    id_rol?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type rrhh_rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre" | "descripcion", ExtArgs["result"]["rrhh_rol"]>
  export type rrhh_rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | rrhh_rol$empleadosArgs<ExtArgs>
    _count?: boolean | Rrhh_rolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rrhh_rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rrhh_rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rrhh_rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rrhh_rol"
    objects: {
      empleados: Prisma.$rrhh_empleado_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["rrhh_rol"]>
    composites: {}
  }

  type rrhh_rolGetPayload<S extends boolean | null | undefined | rrhh_rolDefaultArgs> = $Result.GetResult<Prisma.$rrhh_rolPayload, S>

  type rrhh_rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rrhh_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rrhh_rolCountAggregateInputType | true
    }

  export interface rrhh_rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rrhh_rol'], meta: { name: 'rrhh_rol' } }
    /**
     * Find zero or one Rrhh_rol that matches the filter.
     * @param {rrhh_rolFindUniqueArgs} args - Arguments to find a Rrhh_rol
     * @example
     * // Get one Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rrhh_rolFindUniqueArgs>(args: SelectSubset<T, rrhh_rolFindUniqueArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rrhh_rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rrhh_rolFindUniqueOrThrowArgs} args - Arguments to find a Rrhh_rol
     * @example
     * // Get one Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rrhh_rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rrhh_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolFindFirstArgs} args - Arguments to find a Rrhh_rol
     * @example
     * // Get one Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rrhh_rolFindFirstArgs>(args?: SelectSubset<T, rrhh_rolFindFirstArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolFindFirstOrThrowArgs} args - Arguments to find a Rrhh_rol
     * @example
     * // Get one Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rrhh_rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rrhh_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rrhh_rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rrhh_rols
     * const rrhh_rols = await prisma.rrhh_rol.findMany()
     * 
     * // Get first 10 Rrhh_rols
     * const rrhh_rols = await prisma.rrhh_rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rrhh_rolWithId_rolOnly = await prisma.rrhh_rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rrhh_rolFindManyArgs>(args?: SelectSubset<T, rrhh_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rrhh_rol.
     * @param {rrhh_rolCreateArgs} args - Arguments to create a Rrhh_rol.
     * @example
     * // Create one Rrhh_rol
     * const Rrhh_rol = await prisma.rrhh_rol.create({
     *   data: {
     *     // ... data to create a Rrhh_rol
     *   }
     * })
     * 
     */
    create<T extends rrhh_rolCreateArgs>(args: SelectSubset<T, rrhh_rolCreateArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rrhh_rols.
     * @param {rrhh_rolCreateManyArgs} args - Arguments to create many Rrhh_rols.
     * @example
     * // Create many Rrhh_rols
     * const rrhh_rol = await prisma.rrhh_rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rrhh_rolCreateManyArgs>(args?: SelectSubset<T, rrhh_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rrhh_rols and returns the data saved in the database.
     * @param {rrhh_rolCreateManyAndReturnArgs} args - Arguments to create many Rrhh_rols.
     * @example
     * // Create many Rrhh_rols
     * const rrhh_rol = await prisma.rrhh_rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rrhh_rols and only return the `id_rol`
     * const rrhh_rolWithId_rolOnly = await prisma.rrhh_rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rrhh_rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rrhh_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rrhh_rol.
     * @param {rrhh_rolDeleteArgs} args - Arguments to delete one Rrhh_rol.
     * @example
     * // Delete one Rrhh_rol
     * const Rrhh_rol = await prisma.rrhh_rol.delete({
     *   where: {
     *     // ... filter to delete one Rrhh_rol
     *   }
     * })
     * 
     */
    delete<T extends rrhh_rolDeleteArgs>(args: SelectSubset<T, rrhh_rolDeleteArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rrhh_rol.
     * @param {rrhh_rolUpdateArgs} args - Arguments to update one Rrhh_rol.
     * @example
     * // Update one Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rrhh_rolUpdateArgs>(args: SelectSubset<T, rrhh_rolUpdateArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rrhh_rols.
     * @param {rrhh_rolDeleteManyArgs} args - Arguments to filter Rrhh_rols to delete.
     * @example
     * // Delete a few Rrhh_rols
     * const { count } = await prisma.rrhh_rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rrhh_rolDeleteManyArgs>(args?: SelectSubset<T, rrhh_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rrhh_rols
     * const rrhh_rol = await prisma.rrhh_rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rrhh_rolUpdateManyArgs>(args: SelectSubset<T, rrhh_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_rols and returns the data updated in the database.
     * @param {rrhh_rolUpdateManyAndReturnArgs} args - Arguments to update many Rrhh_rols.
     * @example
     * // Update many Rrhh_rols
     * const rrhh_rol = await prisma.rrhh_rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rrhh_rols and only return the `id_rol`
     * const rrhh_rolWithId_rolOnly = await prisma.rrhh_rol.updateManyAndReturn({
     *   select: { id_rol: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rrhh_rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rrhh_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rrhh_rol.
     * @param {rrhh_rolUpsertArgs} args - Arguments to update or create a Rrhh_rol.
     * @example
     * // Update or create a Rrhh_rol
     * const rrhh_rol = await prisma.rrhh_rol.upsert({
     *   create: {
     *     // ... data to create a Rrhh_rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rrhh_rol we want to update
     *   }
     * })
     */
    upsert<T extends rrhh_rolUpsertArgs>(args: SelectSubset<T, rrhh_rolUpsertArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rrhh_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolCountArgs} args - Arguments to filter Rrhh_rols to count.
     * @example
     * // Count the number of Rrhh_rols
     * const count = await prisma.rrhh_rol.count({
     *   where: {
     *     // ... the filter for the Rrhh_rols we want to count
     *   }
     * })
    **/
    count<T extends rrhh_rolCountArgs>(
      args?: Subset<T, rrhh_rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rrhh_rolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rrhh_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rrhh_rolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rrhh_rolAggregateArgs>(args: Subset<T, Rrhh_rolAggregateArgs>): Prisma.PrismaPromise<GetRrhh_rolAggregateType<T>>

    /**
     * Group by Rrhh_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_rolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rrhh_rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rrhh_rolGroupByArgs['orderBy'] }
        : { orderBy?: rrhh_rolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rrhh_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRrhh_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rrhh_rol model
   */
  readonly fields: rrhh_rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rrhh_rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rrhh_rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends rrhh_rol$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, rrhh_rol$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rrhh_rol model
   */
  interface rrhh_rolFieldRefs {
    readonly id_rol: FieldRef<"rrhh_rol", 'Int'>
    readonly nombre: FieldRef<"rrhh_rol", 'String'>
    readonly descripcion: FieldRef<"rrhh_rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rrhh_rol findUnique
   */
  export type rrhh_rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_rol to fetch.
     */
    where: rrhh_rolWhereUniqueInput
  }

  /**
   * rrhh_rol findUniqueOrThrow
   */
  export type rrhh_rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_rol to fetch.
     */
    where: rrhh_rolWhereUniqueInput
  }

  /**
   * rrhh_rol findFirst
   */
  export type rrhh_rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_rol to fetch.
     */
    where?: rrhh_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_rols to fetch.
     */
    orderBy?: rrhh_rolOrderByWithRelationInput | rrhh_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_rols.
     */
    cursor?: rrhh_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_rols.
     */
    distinct?: Rrhh_rolScalarFieldEnum | Rrhh_rolScalarFieldEnum[]
  }

  /**
   * rrhh_rol findFirstOrThrow
   */
  export type rrhh_rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_rol to fetch.
     */
    where?: rrhh_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_rols to fetch.
     */
    orderBy?: rrhh_rolOrderByWithRelationInput | rrhh_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_rols.
     */
    cursor?: rrhh_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_rols.
     */
    distinct?: Rrhh_rolScalarFieldEnum | Rrhh_rolScalarFieldEnum[]
  }

  /**
   * rrhh_rol findMany
   */
  export type rrhh_rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_rols to fetch.
     */
    where?: rrhh_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_rols to fetch.
     */
    orderBy?: rrhh_rolOrderByWithRelationInput | rrhh_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rrhh_rols.
     */
    cursor?: rrhh_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_rols.
     */
    skip?: number
    distinct?: Rrhh_rolScalarFieldEnum | Rrhh_rolScalarFieldEnum[]
  }

  /**
   * rrhh_rol create
   */
  export type rrhh_rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rrhh_rol.
     */
    data: XOR<rrhh_rolCreateInput, rrhh_rolUncheckedCreateInput>
  }

  /**
   * rrhh_rol createMany
   */
  export type rrhh_rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rrhh_rols.
     */
    data: rrhh_rolCreateManyInput | rrhh_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_rol createManyAndReturn
   */
  export type rrhh_rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * The data used to create many rrhh_rols.
     */
    data: rrhh_rolCreateManyInput | rrhh_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_rol update
   */
  export type rrhh_rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rrhh_rol.
     */
    data: XOR<rrhh_rolUpdateInput, rrhh_rolUncheckedUpdateInput>
    /**
     * Choose, which rrhh_rol to update.
     */
    where: rrhh_rolWhereUniqueInput
  }

  /**
   * rrhh_rol updateMany
   */
  export type rrhh_rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rrhh_rols.
     */
    data: XOR<rrhh_rolUpdateManyMutationInput, rrhh_rolUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_rols to update
     */
    where?: rrhh_rolWhereInput
    /**
     * Limit how many rrhh_rols to update.
     */
    limit?: number
  }

  /**
   * rrhh_rol updateManyAndReturn
   */
  export type rrhh_rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * The data used to update rrhh_rols.
     */
    data: XOR<rrhh_rolUpdateManyMutationInput, rrhh_rolUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_rols to update
     */
    where?: rrhh_rolWhereInput
    /**
     * Limit how many rrhh_rols to update.
     */
    limit?: number
  }

  /**
   * rrhh_rol upsert
   */
  export type rrhh_rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rrhh_rol to update in case it exists.
     */
    where: rrhh_rolWhereUniqueInput
    /**
     * In case the rrhh_rol found by the `where` argument doesn't exist, create a new rrhh_rol with this data.
     */
    create: XOR<rrhh_rolCreateInput, rrhh_rolUncheckedCreateInput>
    /**
     * In case the rrhh_rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rrhh_rolUpdateInput, rrhh_rolUncheckedUpdateInput>
  }

  /**
   * rrhh_rol delete
   */
  export type rrhh_rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
    /**
     * Filter which rrhh_rol to delete.
     */
    where: rrhh_rolWhereUniqueInput
  }

  /**
   * rrhh_rol deleteMany
   */
  export type rrhh_rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_rols to delete
     */
    where?: rrhh_rolWhereInput
    /**
     * Limit how many rrhh_rols to delete.
     */
    limit?: number
  }

  /**
   * rrhh_rol.empleados
   */
  export type rrhh_rol$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    where?: rrhh_empleado_rolWhereInput
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    cursor?: rrhh_empleado_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rrhh_empleado_rolScalarFieldEnum | Rrhh_empleado_rolScalarFieldEnum[]
  }

  /**
   * rrhh_rol without action
   */
  export type rrhh_rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_rol
     */
    select?: rrhh_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_rol
     */
    omit?: rrhh_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_rolInclude<ExtArgs> | null
  }


  /**
   * Model rrhh_empleado_rol
   */

  export type AggregateRrhh_empleado_rol = {
    _count: Rrhh_empleado_rolCountAggregateOutputType | null
    _avg: Rrhh_empleado_rolAvgAggregateOutputType | null
    _sum: Rrhh_empleado_rolSumAggregateOutputType | null
    _min: Rrhh_empleado_rolMinAggregateOutputType | null
    _max: Rrhh_empleado_rolMaxAggregateOutputType | null
  }

  export type Rrhh_empleado_rolAvgAggregateOutputType = {
    id_empleado: number | null
    id_rol: number | null
  }

  export type Rrhh_empleado_rolSumAggregateOutputType = {
    id_empleado: number | null
    id_rol: number | null
  }

  export type Rrhh_empleado_rolMinAggregateOutputType = {
    id_empleado: number | null
    id_rol: number | null
  }

  export type Rrhh_empleado_rolMaxAggregateOutputType = {
    id_empleado: number | null
    id_rol: number | null
  }

  export type Rrhh_empleado_rolCountAggregateOutputType = {
    id_empleado: number
    id_rol: number
    _all: number
  }


  export type Rrhh_empleado_rolAvgAggregateInputType = {
    id_empleado?: true
    id_rol?: true
  }

  export type Rrhh_empleado_rolSumAggregateInputType = {
    id_empleado?: true
    id_rol?: true
  }

  export type Rrhh_empleado_rolMinAggregateInputType = {
    id_empleado?: true
    id_rol?: true
  }

  export type Rrhh_empleado_rolMaxAggregateInputType = {
    id_empleado?: true
    id_rol?: true
  }

  export type Rrhh_empleado_rolCountAggregateInputType = {
    id_empleado?: true
    id_rol?: true
    _all?: true
  }

  export type Rrhh_empleado_rolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_empleado_rol to aggregate.
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_empleado_rols to fetch.
     */
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rrhh_empleado_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_empleado_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_empleado_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rrhh_empleado_rols
    **/
    _count?: true | Rrhh_empleado_rolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rrhh_empleado_rolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rrhh_empleado_rolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rrhh_empleado_rolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rrhh_empleado_rolMaxAggregateInputType
  }

  export type GetRrhh_empleado_rolAggregateType<T extends Rrhh_empleado_rolAggregateArgs> = {
        [P in keyof T & keyof AggregateRrhh_empleado_rol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRrhh_empleado_rol[P]>
      : GetScalarType<T[P], AggregateRrhh_empleado_rol[P]>
  }




  export type rrhh_empleado_rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_empleado_rolWhereInput
    orderBy?: rrhh_empleado_rolOrderByWithAggregationInput | rrhh_empleado_rolOrderByWithAggregationInput[]
    by: Rrhh_empleado_rolScalarFieldEnum[] | Rrhh_empleado_rolScalarFieldEnum
    having?: rrhh_empleado_rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rrhh_empleado_rolCountAggregateInputType | true
    _avg?: Rrhh_empleado_rolAvgAggregateInputType
    _sum?: Rrhh_empleado_rolSumAggregateInputType
    _min?: Rrhh_empleado_rolMinAggregateInputType
    _max?: Rrhh_empleado_rolMaxAggregateInputType
  }

  export type Rrhh_empleado_rolGroupByOutputType = {
    id_empleado: number
    id_rol: number
    _count: Rrhh_empleado_rolCountAggregateOutputType | null
    _avg: Rrhh_empleado_rolAvgAggregateOutputType | null
    _sum: Rrhh_empleado_rolSumAggregateOutputType | null
    _min: Rrhh_empleado_rolMinAggregateOutputType | null
    _max: Rrhh_empleado_rolMaxAggregateOutputType | null
  }

  type GetRrhh_empleado_rolGroupByPayload<T extends rrhh_empleado_rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rrhh_empleado_rolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rrhh_empleado_rolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rrhh_empleado_rolGroupByOutputType[P]>
            : GetScalarType<T[P], Rrhh_empleado_rolGroupByOutputType[P]>
        }
      >
    >


  export type rrhh_empleado_rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    id_rol?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_empleado_rol"]>

  export type rrhh_empleado_rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    id_rol?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_empleado_rol"]>

  export type rrhh_empleado_rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    id_rol?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_empleado_rol"]>

  export type rrhh_empleado_rolSelectScalar = {
    id_empleado?: boolean
    id_rol?: boolean
  }

  export type rrhh_empleado_rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_empleado" | "id_rol", ExtArgs["result"]["rrhh_empleado_rol"]>
  export type rrhh_empleado_rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }
  export type rrhh_empleado_rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }
  export type rrhh_empleado_rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
    rol?: boolean | rrhh_rolDefaultArgs<ExtArgs>
  }

  export type $rrhh_empleado_rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rrhh_empleado_rol"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
      rol: Prisma.$rrhh_rolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empleado: number
      id_rol: number
    }, ExtArgs["result"]["rrhh_empleado_rol"]>
    composites: {}
  }

  type rrhh_empleado_rolGetPayload<S extends boolean | null | undefined | rrhh_empleado_rolDefaultArgs> = $Result.GetResult<Prisma.$rrhh_empleado_rolPayload, S>

  type rrhh_empleado_rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rrhh_empleado_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rrhh_empleado_rolCountAggregateInputType | true
    }

  export interface rrhh_empleado_rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rrhh_empleado_rol'], meta: { name: 'rrhh_empleado_rol' } }
    /**
     * Find zero or one Rrhh_empleado_rol that matches the filter.
     * @param {rrhh_empleado_rolFindUniqueArgs} args - Arguments to find a Rrhh_empleado_rol
     * @example
     * // Get one Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rrhh_empleado_rolFindUniqueArgs>(args: SelectSubset<T, rrhh_empleado_rolFindUniqueArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rrhh_empleado_rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rrhh_empleado_rolFindUniqueOrThrowArgs} args - Arguments to find a Rrhh_empleado_rol
     * @example
     * // Get one Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rrhh_empleado_rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rrhh_empleado_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_empleado_rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolFindFirstArgs} args - Arguments to find a Rrhh_empleado_rol
     * @example
     * // Get one Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rrhh_empleado_rolFindFirstArgs>(args?: SelectSubset<T, rrhh_empleado_rolFindFirstArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_empleado_rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolFindFirstOrThrowArgs} args - Arguments to find a Rrhh_empleado_rol
     * @example
     * // Get one Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rrhh_empleado_rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rrhh_empleado_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rrhh_empleado_rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rrhh_empleado_rols
     * const rrhh_empleado_rols = await prisma.rrhh_empleado_rol.findMany()
     * 
     * // Get first 10 Rrhh_empleado_rols
     * const rrhh_empleado_rols = await prisma.rrhh_empleado_rol.findMany({ take: 10 })
     * 
     * // Only select the `id_empleado`
     * const rrhh_empleado_rolWithId_empleadoOnly = await prisma.rrhh_empleado_rol.findMany({ select: { id_empleado: true } })
     * 
     */
    findMany<T extends rrhh_empleado_rolFindManyArgs>(args?: SelectSubset<T, rrhh_empleado_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rrhh_empleado_rol.
     * @param {rrhh_empleado_rolCreateArgs} args - Arguments to create a Rrhh_empleado_rol.
     * @example
     * // Create one Rrhh_empleado_rol
     * const Rrhh_empleado_rol = await prisma.rrhh_empleado_rol.create({
     *   data: {
     *     // ... data to create a Rrhh_empleado_rol
     *   }
     * })
     * 
     */
    create<T extends rrhh_empleado_rolCreateArgs>(args: SelectSubset<T, rrhh_empleado_rolCreateArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rrhh_empleado_rols.
     * @param {rrhh_empleado_rolCreateManyArgs} args - Arguments to create many Rrhh_empleado_rols.
     * @example
     * // Create many Rrhh_empleado_rols
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rrhh_empleado_rolCreateManyArgs>(args?: SelectSubset<T, rrhh_empleado_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rrhh_empleado_rols and returns the data saved in the database.
     * @param {rrhh_empleado_rolCreateManyAndReturnArgs} args - Arguments to create many Rrhh_empleado_rols.
     * @example
     * // Create many Rrhh_empleado_rols
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rrhh_empleado_rols and only return the `id_empleado`
     * const rrhh_empleado_rolWithId_empleadoOnly = await prisma.rrhh_empleado_rol.createManyAndReturn({
     *   select: { id_empleado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rrhh_empleado_rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rrhh_empleado_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rrhh_empleado_rol.
     * @param {rrhh_empleado_rolDeleteArgs} args - Arguments to delete one Rrhh_empleado_rol.
     * @example
     * // Delete one Rrhh_empleado_rol
     * const Rrhh_empleado_rol = await prisma.rrhh_empleado_rol.delete({
     *   where: {
     *     // ... filter to delete one Rrhh_empleado_rol
     *   }
     * })
     * 
     */
    delete<T extends rrhh_empleado_rolDeleteArgs>(args: SelectSubset<T, rrhh_empleado_rolDeleteArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rrhh_empleado_rol.
     * @param {rrhh_empleado_rolUpdateArgs} args - Arguments to update one Rrhh_empleado_rol.
     * @example
     * // Update one Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rrhh_empleado_rolUpdateArgs>(args: SelectSubset<T, rrhh_empleado_rolUpdateArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rrhh_empleado_rols.
     * @param {rrhh_empleado_rolDeleteManyArgs} args - Arguments to filter Rrhh_empleado_rols to delete.
     * @example
     * // Delete a few Rrhh_empleado_rols
     * const { count } = await prisma.rrhh_empleado_rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rrhh_empleado_rolDeleteManyArgs>(args?: SelectSubset<T, rrhh_empleado_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_empleado_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rrhh_empleado_rols
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rrhh_empleado_rolUpdateManyArgs>(args: SelectSubset<T, rrhh_empleado_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_empleado_rols and returns the data updated in the database.
     * @param {rrhh_empleado_rolUpdateManyAndReturnArgs} args - Arguments to update many Rrhh_empleado_rols.
     * @example
     * // Update many Rrhh_empleado_rols
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rrhh_empleado_rols and only return the `id_empleado`
     * const rrhh_empleado_rolWithId_empleadoOnly = await prisma.rrhh_empleado_rol.updateManyAndReturn({
     *   select: { id_empleado: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rrhh_empleado_rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rrhh_empleado_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rrhh_empleado_rol.
     * @param {rrhh_empleado_rolUpsertArgs} args - Arguments to update or create a Rrhh_empleado_rol.
     * @example
     * // Update or create a Rrhh_empleado_rol
     * const rrhh_empleado_rol = await prisma.rrhh_empleado_rol.upsert({
     *   create: {
     *     // ... data to create a Rrhh_empleado_rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rrhh_empleado_rol we want to update
     *   }
     * })
     */
    upsert<T extends rrhh_empleado_rolUpsertArgs>(args: SelectSubset<T, rrhh_empleado_rolUpsertArgs<ExtArgs>>): Prisma__rrhh_empleado_rolClient<$Result.GetResult<Prisma.$rrhh_empleado_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rrhh_empleado_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolCountArgs} args - Arguments to filter Rrhh_empleado_rols to count.
     * @example
     * // Count the number of Rrhh_empleado_rols
     * const count = await prisma.rrhh_empleado_rol.count({
     *   where: {
     *     // ... the filter for the Rrhh_empleado_rols we want to count
     *   }
     * })
    **/
    count<T extends rrhh_empleado_rolCountArgs>(
      args?: Subset<T, rrhh_empleado_rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rrhh_empleado_rolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rrhh_empleado_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rrhh_empleado_rolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rrhh_empleado_rolAggregateArgs>(args: Subset<T, Rrhh_empleado_rolAggregateArgs>): Prisma.PrismaPromise<GetRrhh_empleado_rolAggregateType<T>>

    /**
     * Group by Rrhh_empleado_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_empleado_rolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rrhh_empleado_rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rrhh_empleado_rolGroupByArgs['orderBy'] }
        : { orderBy?: rrhh_empleado_rolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rrhh_empleado_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRrhh_empleado_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rrhh_empleado_rol model
   */
  readonly fields: rrhh_empleado_rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rrhh_empleado_rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rrhh_empleado_rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends rrhh_rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rrhh_rolDefaultArgs<ExtArgs>>): Prisma__rrhh_rolClient<$Result.GetResult<Prisma.$rrhh_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rrhh_empleado_rol model
   */
  interface rrhh_empleado_rolFieldRefs {
    readonly id_empleado: FieldRef<"rrhh_empleado_rol", 'Int'>
    readonly id_rol: FieldRef<"rrhh_empleado_rol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rrhh_empleado_rol findUnique
   */
  export type rrhh_empleado_rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_empleado_rol to fetch.
     */
    where: rrhh_empleado_rolWhereUniqueInput
  }

  /**
   * rrhh_empleado_rol findUniqueOrThrow
   */
  export type rrhh_empleado_rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_empleado_rol to fetch.
     */
    where: rrhh_empleado_rolWhereUniqueInput
  }

  /**
   * rrhh_empleado_rol findFirst
   */
  export type rrhh_empleado_rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_empleado_rol to fetch.
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_empleado_rols to fetch.
     */
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_empleado_rols.
     */
    cursor?: rrhh_empleado_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_empleado_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_empleado_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_empleado_rols.
     */
    distinct?: Rrhh_empleado_rolScalarFieldEnum | Rrhh_empleado_rolScalarFieldEnum[]
  }

  /**
   * rrhh_empleado_rol findFirstOrThrow
   */
  export type rrhh_empleado_rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_empleado_rol to fetch.
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_empleado_rols to fetch.
     */
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_empleado_rols.
     */
    cursor?: rrhh_empleado_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_empleado_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_empleado_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_empleado_rols.
     */
    distinct?: Rrhh_empleado_rolScalarFieldEnum | Rrhh_empleado_rolScalarFieldEnum[]
  }

  /**
   * rrhh_empleado_rol findMany
   */
  export type rrhh_empleado_rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_empleado_rols to fetch.
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_empleado_rols to fetch.
     */
    orderBy?: rrhh_empleado_rolOrderByWithRelationInput | rrhh_empleado_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rrhh_empleado_rols.
     */
    cursor?: rrhh_empleado_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_empleado_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_empleado_rols.
     */
    skip?: number
    distinct?: Rrhh_empleado_rolScalarFieldEnum | Rrhh_empleado_rolScalarFieldEnum[]
  }

  /**
   * rrhh_empleado_rol create
   */
  export type rrhh_empleado_rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rrhh_empleado_rol.
     */
    data: XOR<rrhh_empleado_rolCreateInput, rrhh_empleado_rolUncheckedCreateInput>
  }

  /**
   * rrhh_empleado_rol createMany
   */
  export type rrhh_empleado_rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rrhh_empleado_rols.
     */
    data: rrhh_empleado_rolCreateManyInput | rrhh_empleado_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_empleado_rol createManyAndReturn
   */
  export type rrhh_empleado_rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * The data used to create many rrhh_empleado_rols.
     */
    data: rrhh_empleado_rolCreateManyInput | rrhh_empleado_rolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_empleado_rol update
   */
  export type rrhh_empleado_rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rrhh_empleado_rol.
     */
    data: XOR<rrhh_empleado_rolUpdateInput, rrhh_empleado_rolUncheckedUpdateInput>
    /**
     * Choose, which rrhh_empleado_rol to update.
     */
    where: rrhh_empleado_rolWhereUniqueInput
  }

  /**
   * rrhh_empleado_rol updateMany
   */
  export type rrhh_empleado_rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rrhh_empleado_rols.
     */
    data: XOR<rrhh_empleado_rolUpdateManyMutationInput, rrhh_empleado_rolUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_empleado_rols to update
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * Limit how many rrhh_empleado_rols to update.
     */
    limit?: number
  }

  /**
   * rrhh_empleado_rol updateManyAndReturn
   */
  export type rrhh_empleado_rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * The data used to update rrhh_empleado_rols.
     */
    data: XOR<rrhh_empleado_rolUpdateManyMutationInput, rrhh_empleado_rolUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_empleado_rols to update
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * Limit how many rrhh_empleado_rols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_empleado_rol upsert
   */
  export type rrhh_empleado_rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rrhh_empleado_rol to update in case it exists.
     */
    where: rrhh_empleado_rolWhereUniqueInput
    /**
     * In case the rrhh_empleado_rol found by the `where` argument doesn't exist, create a new rrhh_empleado_rol with this data.
     */
    create: XOR<rrhh_empleado_rolCreateInput, rrhh_empleado_rolUncheckedCreateInput>
    /**
     * In case the rrhh_empleado_rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rrhh_empleado_rolUpdateInput, rrhh_empleado_rolUncheckedUpdateInput>
  }

  /**
   * rrhh_empleado_rol delete
   */
  export type rrhh_empleado_rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
    /**
     * Filter which rrhh_empleado_rol to delete.
     */
    where: rrhh_empleado_rolWhereUniqueInput
  }

  /**
   * rrhh_empleado_rol deleteMany
   */
  export type rrhh_empleado_rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_empleado_rols to delete
     */
    where?: rrhh_empleado_rolWhereInput
    /**
     * Limit how many rrhh_empleado_rols to delete.
     */
    limit?: number
  }

  /**
   * rrhh_empleado_rol without action
   */
  export type rrhh_empleado_rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_empleado_rol
     */
    select?: rrhh_empleado_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_empleado_rol
     */
    omit?: rrhh_empleado_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_empleado_rolInclude<ExtArgs> | null
  }


  /**
   * Model rrhh_ausencia
   */

  export type AggregateRrhh_ausencia = {
    _count: Rrhh_ausenciaCountAggregateOutputType | null
    _avg: Rrhh_ausenciaAvgAggregateOutputType | null
    _sum: Rrhh_ausenciaSumAggregateOutputType | null
    _min: Rrhh_ausenciaMinAggregateOutputType | null
    _max: Rrhh_ausenciaMaxAggregateOutputType | null
  }

  export type Rrhh_ausenciaAvgAggregateOutputType = {
    id_ausencia: number | null
    id_empleado: number | null
  }

  export type Rrhh_ausenciaSumAggregateOutputType = {
    id_ausencia: number | null
    id_empleado: number | null
  }

  export type Rrhh_ausenciaMinAggregateOutputType = {
    id_ausencia: number | null
    id_empleado: number | null
    tipo: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado: string | null
    motivo: string | null
    fecha_solicitud: Date | null
  }

  export type Rrhh_ausenciaMaxAggregateOutputType = {
    id_ausencia: number | null
    id_empleado: number | null
    tipo: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado: string | null
    motivo: string | null
    fecha_solicitud: Date | null
  }

  export type Rrhh_ausenciaCountAggregateOutputType = {
    id_ausencia: number
    id_empleado: number
    tipo: number
    fecha_inicio: number
    fecha_fin: number
    estado: number
    motivo: number
    fecha_solicitud: number
    _all: number
  }


  export type Rrhh_ausenciaAvgAggregateInputType = {
    id_ausencia?: true
    id_empleado?: true
  }

  export type Rrhh_ausenciaSumAggregateInputType = {
    id_ausencia?: true
    id_empleado?: true
  }

  export type Rrhh_ausenciaMinAggregateInputType = {
    id_ausencia?: true
    id_empleado?: true
    tipo?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    motivo?: true
    fecha_solicitud?: true
  }

  export type Rrhh_ausenciaMaxAggregateInputType = {
    id_ausencia?: true
    id_empleado?: true
    tipo?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    motivo?: true
    fecha_solicitud?: true
  }

  export type Rrhh_ausenciaCountAggregateInputType = {
    id_ausencia?: true
    id_empleado?: true
    tipo?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    motivo?: true
    fecha_solicitud?: true
    _all?: true
  }

  export type Rrhh_ausenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_ausencia to aggregate.
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_ausencias to fetch.
     */
    orderBy?: rrhh_ausenciaOrderByWithRelationInput | rrhh_ausenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rrhh_ausenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_ausencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_ausencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rrhh_ausencias
    **/
    _count?: true | Rrhh_ausenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rrhh_ausenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rrhh_ausenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rrhh_ausenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rrhh_ausenciaMaxAggregateInputType
  }

  export type GetRrhh_ausenciaAggregateType<T extends Rrhh_ausenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateRrhh_ausencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRrhh_ausencia[P]>
      : GetScalarType<T[P], AggregateRrhh_ausencia[P]>
  }




  export type rrhh_ausenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rrhh_ausenciaWhereInput
    orderBy?: rrhh_ausenciaOrderByWithAggregationInput | rrhh_ausenciaOrderByWithAggregationInput[]
    by: Rrhh_ausenciaScalarFieldEnum[] | Rrhh_ausenciaScalarFieldEnum
    having?: rrhh_ausenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rrhh_ausenciaCountAggregateInputType | true
    _avg?: Rrhh_ausenciaAvgAggregateInputType
    _sum?: Rrhh_ausenciaSumAggregateInputType
    _min?: Rrhh_ausenciaMinAggregateInputType
    _max?: Rrhh_ausenciaMaxAggregateInputType
  }

  export type Rrhh_ausenciaGroupByOutputType = {
    id_ausencia: number
    id_empleado: number
    tipo: string
    fecha_inicio: Date
    fecha_fin: Date
    estado: string
    motivo: string | null
    fecha_solicitud: Date
    _count: Rrhh_ausenciaCountAggregateOutputType | null
    _avg: Rrhh_ausenciaAvgAggregateOutputType | null
    _sum: Rrhh_ausenciaSumAggregateOutputType | null
    _min: Rrhh_ausenciaMinAggregateOutputType | null
    _max: Rrhh_ausenciaMaxAggregateOutputType | null
  }

  type GetRrhh_ausenciaGroupByPayload<T extends rrhh_ausenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rrhh_ausenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rrhh_ausenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rrhh_ausenciaGroupByOutputType[P]>
            : GetScalarType<T[P], Rrhh_ausenciaGroupByOutputType[P]>
        }
      >
    >


  export type rrhh_ausenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ausencia?: boolean
    id_empleado?: boolean
    tipo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    motivo?: boolean
    fecha_solicitud?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_ausencia"]>

  export type rrhh_ausenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ausencia?: boolean
    id_empleado?: boolean
    tipo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    motivo?: boolean
    fecha_solicitud?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_ausencia"]>

  export type rrhh_ausenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ausencia?: boolean
    id_empleado?: boolean
    tipo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    motivo?: boolean
    fecha_solicitud?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rrhh_ausencia"]>

  export type rrhh_ausenciaSelectScalar = {
    id_ausencia?: boolean
    id_empleado?: boolean
    tipo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    motivo?: boolean
    fecha_solicitud?: boolean
  }

  export type rrhh_ausenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ausencia" | "id_empleado" | "tipo" | "fecha_inicio" | "fecha_fin" | "estado" | "motivo" | "fecha_solicitud", ExtArgs["result"]["rrhh_ausencia"]>
  export type rrhh_ausenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }
  export type rrhh_ausenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }
  export type rrhh_ausenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $rrhh_ausenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rrhh_ausencia"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ausencia: number
      id_empleado: number
      tipo: string
      fecha_inicio: Date
      fecha_fin: Date
      estado: string
      motivo: string | null
      fecha_solicitud: Date
    }, ExtArgs["result"]["rrhh_ausencia"]>
    composites: {}
  }

  type rrhh_ausenciaGetPayload<S extends boolean | null | undefined | rrhh_ausenciaDefaultArgs> = $Result.GetResult<Prisma.$rrhh_ausenciaPayload, S>

  type rrhh_ausenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rrhh_ausenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rrhh_ausenciaCountAggregateInputType | true
    }

  export interface rrhh_ausenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rrhh_ausencia'], meta: { name: 'rrhh_ausencia' } }
    /**
     * Find zero or one Rrhh_ausencia that matches the filter.
     * @param {rrhh_ausenciaFindUniqueArgs} args - Arguments to find a Rrhh_ausencia
     * @example
     * // Get one Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rrhh_ausenciaFindUniqueArgs>(args: SelectSubset<T, rrhh_ausenciaFindUniqueArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rrhh_ausencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rrhh_ausenciaFindUniqueOrThrowArgs} args - Arguments to find a Rrhh_ausencia
     * @example
     * // Get one Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rrhh_ausenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, rrhh_ausenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_ausencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaFindFirstArgs} args - Arguments to find a Rrhh_ausencia
     * @example
     * // Get one Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rrhh_ausenciaFindFirstArgs>(args?: SelectSubset<T, rrhh_ausenciaFindFirstArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rrhh_ausencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaFindFirstOrThrowArgs} args - Arguments to find a Rrhh_ausencia
     * @example
     * // Get one Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rrhh_ausenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, rrhh_ausenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rrhh_ausencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rrhh_ausencias
     * const rrhh_ausencias = await prisma.rrhh_ausencia.findMany()
     * 
     * // Get first 10 Rrhh_ausencias
     * const rrhh_ausencias = await prisma.rrhh_ausencia.findMany({ take: 10 })
     * 
     * // Only select the `id_ausencia`
     * const rrhh_ausenciaWithId_ausenciaOnly = await prisma.rrhh_ausencia.findMany({ select: { id_ausencia: true } })
     * 
     */
    findMany<T extends rrhh_ausenciaFindManyArgs>(args?: SelectSubset<T, rrhh_ausenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rrhh_ausencia.
     * @param {rrhh_ausenciaCreateArgs} args - Arguments to create a Rrhh_ausencia.
     * @example
     * // Create one Rrhh_ausencia
     * const Rrhh_ausencia = await prisma.rrhh_ausencia.create({
     *   data: {
     *     // ... data to create a Rrhh_ausencia
     *   }
     * })
     * 
     */
    create<T extends rrhh_ausenciaCreateArgs>(args: SelectSubset<T, rrhh_ausenciaCreateArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rrhh_ausencias.
     * @param {rrhh_ausenciaCreateManyArgs} args - Arguments to create many Rrhh_ausencias.
     * @example
     * // Create many Rrhh_ausencias
     * const rrhh_ausencia = await prisma.rrhh_ausencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rrhh_ausenciaCreateManyArgs>(args?: SelectSubset<T, rrhh_ausenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rrhh_ausencias and returns the data saved in the database.
     * @param {rrhh_ausenciaCreateManyAndReturnArgs} args - Arguments to create many Rrhh_ausencias.
     * @example
     * // Create many Rrhh_ausencias
     * const rrhh_ausencia = await prisma.rrhh_ausencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rrhh_ausencias and only return the `id_ausencia`
     * const rrhh_ausenciaWithId_ausenciaOnly = await prisma.rrhh_ausencia.createManyAndReturn({
     *   select: { id_ausencia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rrhh_ausenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, rrhh_ausenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rrhh_ausencia.
     * @param {rrhh_ausenciaDeleteArgs} args - Arguments to delete one Rrhh_ausencia.
     * @example
     * // Delete one Rrhh_ausencia
     * const Rrhh_ausencia = await prisma.rrhh_ausencia.delete({
     *   where: {
     *     // ... filter to delete one Rrhh_ausencia
     *   }
     * })
     * 
     */
    delete<T extends rrhh_ausenciaDeleteArgs>(args: SelectSubset<T, rrhh_ausenciaDeleteArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rrhh_ausencia.
     * @param {rrhh_ausenciaUpdateArgs} args - Arguments to update one Rrhh_ausencia.
     * @example
     * // Update one Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rrhh_ausenciaUpdateArgs>(args: SelectSubset<T, rrhh_ausenciaUpdateArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rrhh_ausencias.
     * @param {rrhh_ausenciaDeleteManyArgs} args - Arguments to filter Rrhh_ausencias to delete.
     * @example
     * // Delete a few Rrhh_ausencias
     * const { count } = await prisma.rrhh_ausencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rrhh_ausenciaDeleteManyArgs>(args?: SelectSubset<T, rrhh_ausenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_ausencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rrhh_ausencias
     * const rrhh_ausencia = await prisma.rrhh_ausencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rrhh_ausenciaUpdateManyArgs>(args: SelectSubset<T, rrhh_ausenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rrhh_ausencias and returns the data updated in the database.
     * @param {rrhh_ausenciaUpdateManyAndReturnArgs} args - Arguments to update many Rrhh_ausencias.
     * @example
     * // Update many Rrhh_ausencias
     * const rrhh_ausencia = await prisma.rrhh_ausencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rrhh_ausencias and only return the `id_ausencia`
     * const rrhh_ausenciaWithId_ausenciaOnly = await prisma.rrhh_ausencia.updateManyAndReturn({
     *   select: { id_ausencia: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rrhh_ausenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, rrhh_ausenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rrhh_ausencia.
     * @param {rrhh_ausenciaUpsertArgs} args - Arguments to update or create a Rrhh_ausencia.
     * @example
     * // Update or create a Rrhh_ausencia
     * const rrhh_ausencia = await prisma.rrhh_ausencia.upsert({
     *   create: {
     *     // ... data to create a Rrhh_ausencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rrhh_ausencia we want to update
     *   }
     * })
     */
    upsert<T extends rrhh_ausenciaUpsertArgs>(args: SelectSubset<T, rrhh_ausenciaUpsertArgs<ExtArgs>>): Prisma__rrhh_ausenciaClient<$Result.GetResult<Prisma.$rrhh_ausenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rrhh_ausencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaCountArgs} args - Arguments to filter Rrhh_ausencias to count.
     * @example
     * // Count the number of Rrhh_ausencias
     * const count = await prisma.rrhh_ausencia.count({
     *   where: {
     *     // ... the filter for the Rrhh_ausencias we want to count
     *   }
     * })
    **/
    count<T extends rrhh_ausenciaCountArgs>(
      args?: Subset<T, rrhh_ausenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rrhh_ausenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rrhh_ausencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rrhh_ausenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rrhh_ausenciaAggregateArgs>(args: Subset<T, Rrhh_ausenciaAggregateArgs>): Prisma.PrismaPromise<GetRrhh_ausenciaAggregateType<T>>

    /**
     * Group by Rrhh_ausencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rrhh_ausenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rrhh_ausenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rrhh_ausenciaGroupByArgs['orderBy'] }
        : { orderBy?: rrhh_ausenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rrhh_ausenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRrhh_ausenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rrhh_ausencia model
   */
  readonly fields: rrhh_ausenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rrhh_ausencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rrhh_ausenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rrhh_ausencia model
   */
  interface rrhh_ausenciaFieldRefs {
    readonly id_ausencia: FieldRef<"rrhh_ausencia", 'Int'>
    readonly id_empleado: FieldRef<"rrhh_ausencia", 'Int'>
    readonly tipo: FieldRef<"rrhh_ausencia", 'String'>
    readonly fecha_inicio: FieldRef<"rrhh_ausencia", 'DateTime'>
    readonly fecha_fin: FieldRef<"rrhh_ausencia", 'DateTime'>
    readonly estado: FieldRef<"rrhh_ausencia", 'String'>
    readonly motivo: FieldRef<"rrhh_ausencia", 'String'>
    readonly fecha_solicitud: FieldRef<"rrhh_ausencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rrhh_ausencia findUnique
   */
  export type rrhh_ausenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_ausencia to fetch.
     */
    where: rrhh_ausenciaWhereUniqueInput
  }

  /**
   * rrhh_ausencia findUniqueOrThrow
   */
  export type rrhh_ausenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_ausencia to fetch.
     */
    where: rrhh_ausenciaWhereUniqueInput
  }

  /**
   * rrhh_ausencia findFirst
   */
  export type rrhh_ausenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_ausencia to fetch.
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_ausencias to fetch.
     */
    orderBy?: rrhh_ausenciaOrderByWithRelationInput | rrhh_ausenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_ausencias.
     */
    cursor?: rrhh_ausenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_ausencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_ausencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_ausencias.
     */
    distinct?: Rrhh_ausenciaScalarFieldEnum | Rrhh_ausenciaScalarFieldEnum[]
  }

  /**
   * rrhh_ausencia findFirstOrThrow
   */
  export type rrhh_ausenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_ausencia to fetch.
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_ausencias to fetch.
     */
    orderBy?: rrhh_ausenciaOrderByWithRelationInput | rrhh_ausenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rrhh_ausencias.
     */
    cursor?: rrhh_ausenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_ausencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_ausencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rrhh_ausencias.
     */
    distinct?: Rrhh_ausenciaScalarFieldEnum | Rrhh_ausenciaScalarFieldEnum[]
  }

  /**
   * rrhh_ausencia findMany
   */
  export type rrhh_ausenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter, which rrhh_ausencias to fetch.
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rrhh_ausencias to fetch.
     */
    orderBy?: rrhh_ausenciaOrderByWithRelationInput | rrhh_ausenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rrhh_ausencias.
     */
    cursor?: rrhh_ausenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rrhh_ausencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rrhh_ausencias.
     */
    skip?: number
    distinct?: Rrhh_ausenciaScalarFieldEnum | Rrhh_ausenciaScalarFieldEnum[]
  }

  /**
   * rrhh_ausencia create
   */
  export type rrhh_ausenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a rrhh_ausencia.
     */
    data: XOR<rrhh_ausenciaCreateInput, rrhh_ausenciaUncheckedCreateInput>
  }

  /**
   * rrhh_ausencia createMany
   */
  export type rrhh_ausenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rrhh_ausencias.
     */
    data: rrhh_ausenciaCreateManyInput | rrhh_ausenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rrhh_ausencia createManyAndReturn
   */
  export type rrhh_ausenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * The data used to create many rrhh_ausencias.
     */
    data: rrhh_ausenciaCreateManyInput | rrhh_ausenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_ausencia update
   */
  export type rrhh_ausenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a rrhh_ausencia.
     */
    data: XOR<rrhh_ausenciaUpdateInput, rrhh_ausenciaUncheckedUpdateInput>
    /**
     * Choose, which rrhh_ausencia to update.
     */
    where: rrhh_ausenciaWhereUniqueInput
  }

  /**
   * rrhh_ausencia updateMany
   */
  export type rrhh_ausenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rrhh_ausencias.
     */
    data: XOR<rrhh_ausenciaUpdateManyMutationInput, rrhh_ausenciaUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_ausencias to update
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * Limit how many rrhh_ausencias to update.
     */
    limit?: number
  }

  /**
   * rrhh_ausencia updateManyAndReturn
   */
  export type rrhh_ausenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * The data used to update rrhh_ausencias.
     */
    data: XOR<rrhh_ausenciaUpdateManyMutationInput, rrhh_ausenciaUncheckedUpdateManyInput>
    /**
     * Filter which rrhh_ausencias to update
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * Limit how many rrhh_ausencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rrhh_ausencia upsert
   */
  export type rrhh_ausenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the rrhh_ausencia to update in case it exists.
     */
    where: rrhh_ausenciaWhereUniqueInput
    /**
     * In case the rrhh_ausencia found by the `where` argument doesn't exist, create a new rrhh_ausencia with this data.
     */
    create: XOR<rrhh_ausenciaCreateInput, rrhh_ausenciaUncheckedCreateInput>
    /**
     * In case the rrhh_ausencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rrhh_ausenciaUpdateInput, rrhh_ausenciaUncheckedUpdateInput>
  }

  /**
   * rrhh_ausencia delete
   */
  export type rrhh_ausenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
    /**
     * Filter which rrhh_ausencia to delete.
     */
    where: rrhh_ausenciaWhereUniqueInput
  }

  /**
   * rrhh_ausencia deleteMany
   */
  export type rrhh_ausenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rrhh_ausencias to delete
     */
    where?: rrhh_ausenciaWhereInput
    /**
     * Limit how many rrhh_ausencias to delete.
     */
    limit?: number
  }

  /**
   * rrhh_ausencia without action
   */
  export type rrhh_ausenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rrhh_ausencia
     */
    select?: rrhh_ausenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rrhh_ausencia
     */
    omit?: rrhh_ausenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rrhh_ausenciaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmpleadoScalarFieldEnum: {
    id_empleado: 'id_empleado',
    rut: 'rut',
    nombre: 'nombre',
    apellido: 'apellido',
    rol: 'rol',
    email: 'email',
    telefono: 'telefono',
    fecha_ingreso: 'fecha_ingreso',
    id_departamento: 'id_departamento',
    estado: 'estado',
    fecha_baja: 'fecha_baja',
    motivo_baja: 'motivo_baja'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const Rrhh_departamentoScalarFieldEnum: {
    id_departamento: 'id_departamento',
    nombre: 'nombre'
  };

  export type Rrhh_departamentoScalarFieldEnum = (typeof Rrhh_departamentoScalarFieldEnum)[keyof typeof Rrhh_departamentoScalarFieldEnum]


  export const Rrhh_usuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_empleado: 'id_empleado',
    password_hash: 'password_hash',
    activo: 'activo'
  };

  export type Rrhh_usuarioScalarFieldEnum = (typeof Rrhh_usuarioScalarFieldEnum)[keyof typeof Rrhh_usuarioScalarFieldEnum]


  export const Rrhh_rolScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type Rrhh_rolScalarFieldEnum = (typeof Rrhh_rolScalarFieldEnum)[keyof typeof Rrhh_rolScalarFieldEnum]


  export const Rrhh_empleado_rolScalarFieldEnum: {
    id_empleado: 'id_empleado',
    id_rol: 'id_rol'
  };

  export type Rrhh_empleado_rolScalarFieldEnum = (typeof Rrhh_empleado_rolScalarFieldEnum)[keyof typeof Rrhh_empleado_rolScalarFieldEnum]


  export const Rrhh_ausenciaScalarFieldEnum: {
    id_ausencia: 'id_ausencia',
    id_empleado: 'id_empleado',
    tipo: 'tipo',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    estado: 'estado',
    motivo: 'motivo',
    fecha_solicitud: 'fecha_solicitud'
  };

  export type Rrhh_ausenciaScalarFieldEnum = (typeof Rrhh_ausenciaScalarFieldEnum)[keyof typeof Rrhh_ausenciaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type empleadoWhereInput = {
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    id_empleado?: IntFilter<"empleado"> | number
    rut?: StringFilter<"empleado"> | string
    nombre?: StringFilter<"empleado"> | string
    apellido?: StringFilter<"empleado"> | string
    rol?: StringFilter<"empleado"> | string
    email?: StringFilter<"empleado"> | string
    telefono?: StringNullableFilter<"empleado"> | string | null
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_departamento?: IntFilter<"empleado"> | number
    estado?: StringFilter<"empleado"> | string
    fecha_baja?: DateTimeNullableFilter<"empleado"> | Date | string | null
    motivo_baja?: StringNullableFilter<"empleado"> | string | null
    ausencias?: Rrhh_ausenciaListRelationFilter
    roles?: Rrhh_empleado_rolListRelationFilter
    usuario?: XOR<Rrhh_usuarioNullableScalarRelationFilter, rrhh_usuarioWhereInput> | null
    departamento?: XOR<Rrhh_departamentoScalarRelationFilter, rrhh_departamentoWhereInput>
  }

  export type empleadoOrderByWithRelationInput = {
    id_empleado?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_ingreso?: SortOrder
    id_departamento?: SortOrder
    estado?: SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    motivo_baja?: SortOrderInput | SortOrder
    ausencias?: rrhh_ausenciaOrderByRelationAggregateInput
    roles?: rrhh_empleado_rolOrderByRelationAggregateInput
    usuario?: rrhh_usuarioOrderByWithRelationInput
    departamento?: rrhh_departamentoOrderByWithRelationInput
  }

  export type empleadoWhereUniqueInput = Prisma.AtLeast<{
    id_empleado?: number
    rut?: string
    email?: string
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    nombre?: StringFilter<"empleado"> | string
    apellido?: StringFilter<"empleado"> | string
    rol?: StringFilter<"empleado"> | string
    telefono?: StringNullableFilter<"empleado"> | string | null
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_departamento?: IntFilter<"empleado"> | number
    estado?: StringFilter<"empleado"> | string
    fecha_baja?: DateTimeNullableFilter<"empleado"> | Date | string | null
    motivo_baja?: StringNullableFilter<"empleado"> | string | null
    ausencias?: Rrhh_ausenciaListRelationFilter
    roles?: Rrhh_empleado_rolListRelationFilter
    usuario?: XOR<Rrhh_usuarioNullableScalarRelationFilter, rrhh_usuarioWhereInput> | null
    departamento?: XOR<Rrhh_departamentoScalarRelationFilter, rrhh_departamentoWhereInput>
  }, "id_empleado" | "rut" | "email">

  export type empleadoOrderByWithAggregationInput = {
    id_empleado?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_ingreso?: SortOrder
    id_departamento?: SortOrder
    estado?: SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    motivo_baja?: SortOrderInput | SortOrder
    _count?: empleadoCountOrderByAggregateInput
    _avg?: empleadoAvgOrderByAggregateInput
    _max?: empleadoMaxOrderByAggregateInput
    _min?: empleadoMinOrderByAggregateInput
    _sum?: empleadoSumOrderByAggregateInput
  }

  export type empleadoScalarWhereWithAggregatesInput = {
    AND?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    OR?: empleadoScalarWhereWithAggregatesInput[]
    NOT?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    id_empleado?: IntWithAggregatesFilter<"empleado"> | number
    rut?: StringWithAggregatesFilter<"empleado"> | string
    nombre?: StringWithAggregatesFilter<"empleado"> | string
    apellido?: StringWithAggregatesFilter<"empleado"> | string
    rol?: StringWithAggregatesFilter<"empleado"> | string
    email?: StringWithAggregatesFilter<"empleado"> | string
    telefono?: StringNullableWithAggregatesFilter<"empleado"> | string | null
    fecha_ingreso?: DateTimeWithAggregatesFilter<"empleado"> | Date | string
    id_departamento?: IntWithAggregatesFilter<"empleado"> | number
    estado?: StringWithAggregatesFilter<"empleado"> | string
    fecha_baja?: DateTimeNullableWithAggregatesFilter<"empleado"> | Date | string | null
    motivo_baja?: StringNullableWithAggregatesFilter<"empleado"> | string | null
  }

  export type rrhh_departamentoWhereInput = {
    AND?: rrhh_departamentoWhereInput | rrhh_departamentoWhereInput[]
    OR?: rrhh_departamentoWhereInput[]
    NOT?: rrhh_departamentoWhereInput | rrhh_departamentoWhereInput[]
    id_departamento?: IntFilter<"rrhh_departamento"> | number
    nombre?: StringFilter<"rrhh_departamento"> | string
    empleados?: EmpleadoListRelationFilter
  }

  export type rrhh_departamentoOrderByWithRelationInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    empleados?: empleadoOrderByRelationAggregateInput
  }

  export type rrhh_departamentoWhereUniqueInput = Prisma.AtLeast<{
    id_departamento?: number
    AND?: rrhh_departamentoWhereInput | rrhh_departamentoWhereInput[]
    OR?: rrhh_departamentoWhereInput[]
    NOT?: rrhh_departamentoWhereInput | rrhh_departamentoWhereInput[]
    nombre?: StringFilter<"rrhh_departamento"> | string
    empleados?: EmpleadoListRelationFilter
  }, "id_departamento">

  export type rrhh_departamentoOrderByWithAggregationInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    _count?: rrhh_departamentoCountOrderByAggregateInput
    _avg?: rrhh_departamentoAvgOrderByAggregateInput
    _max?: rrhh_departamentoMaxOrderByAggregateInput
    _min?: rrhh_departamentoMinOrderByAggregateInput
    _sum?: rrhh_departamentoSumOrderByAggregateInput
  }

  export type rrhh_departamentoScalarWhereWithAggregatesInput = {
    AND?: rrhh_departamentoScalarWhereWithAggregatesInput | rrhh_departamentoScalarWhereWithAggregatesInput[]
    OR?: rrhh_departamentoScalarWhereWithAggregatesInput[]
    NOT?: rrhh_departamentoScalarWhereWithAggregatesInput | rrhh_departamentoScalarWhereWithAggregatesInput[]
    id_departamento?: IntWithAggregatesFilter<"rrhh_departamento"> | number
    nombre?: StringWithAggregatesFilter<"rrhh_departamento"> | string
  }

  export type rrhh_usuarioWhereInput = {
    AND?: rrhh_usuarioWhereInput | rrhh_usuarioWhereInput[]
    OR?: rrhh_usuarioWhereInput[]
    NOT?: rrhh_usuarioWhereInput | rrhh_usuarioWhereInput[]
    id_usuario?: IntFilter<"rrhh_usuario"> | number
    id_empleado?: IntFilter<"rrhh_usuario"> | number
    password_hash?: StringFilter<"rrhh_usuario"> | string
    activo?: BoolFilter<"rrhh_usuario"> | boolean
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
  }

  export type rrhh_usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type rrhh_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    id_empleado?: number
    AND?: rrhh_usuarioWhereInput | rrhh_usuarioWhereInput[]
    OR?: rrhh_usuarioWhereInput[]
    NOT?: rrhh_usuarioWhereInput | rrhh_usuarioWhereInput[]
    password_hash?: StringFilter<"rrhh_usuario"> | string
    activo?: BoolFilter<"rrhh_usuario"> | boolean
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
  }, "id_usuario" | "id_empleado">

  export type rrhh_usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    _count?: rrhh_usuarioCountOrderByAggregateInput
    _avg?: rrhh_usuarioAvgOrderByAggregateInput
    _max?: rrhh_usuarioMaxOrderByAggregateInput
    _min?: rrhh_usuarioMinOrderByAggregateInput
    _sum?: rrhh_usuarioSumOrderByAggregateInput
  }

  export type rrhh_usuarioScalarWhereWithAggregatesInput = {
    AND?: rrhh_usuarioScalarWhereWithAggregatesInput | rrhh_usuarioScalarWhereWithAggregatesInput[]
    OR?: rrhh_usuarioScalarWhereWithAggregatesInput[]
    NOT?: rrhh_usuarioScalarWhereWithAggregatesInput | rrhh_usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"rrhh_usuario"> | number
    id_empleado?: IntWithAggregatesFilter<"rrhh_usuario"> | number
    password_hash?: StringWithAggregatesFilter<"rrhh_usuario"> | string
    activo?: BoolWithAggregatesFilter<"rrhh_usuario"> | boolean
  }

  export type rrhh_rolWhereInput = {
    AND?: rrhh_rolWhereInput | rrhh_rolWhereInput[]
    OR?: rrhh_rolWhereInput[]
    NOT?: rrhh_rolWhereInput | rrhh_rolWhereInput[]
    id_rol?: IntFilter<"rrhh_rol"> | number
    nombre?: StringFilter<"rrhh_rol"> | string
    descripcion?: StringNullableFilter<"rrhh_rol"> | string | null
    empleados?: Rrhh_empleado_rolListRelationFilter
  }

  export type rrhh_rolOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    empleados?: rrhh_empleado_rolOrderByRelationAggregateInput
  }

  export type rrhh_rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    nombre?: string
    AND?: rrhh_rolWhereInput | rrhh_rolWhereInput[]
    OR?: rrhh_rolWhereInput[]
    NOT?: rrhh_rolWhereInput | rrhh_rolWhereInput[]
    descripcion?: StringNullableFilter<"rrhh_rol"> | string | null
    empleados?: Rrhh_empleado_rolListRelationFilter
  }, "id_rol" | "nombre">

  export type rrhh_rolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: rrhh_rolCountOrderByAggregateInput
    _avg?: rrhh_rolAvgOrderByAggregateInput
    _max?: rrhh_rolMaxOrderByAggregateInput
    _min?: rrhh_rolMinOrderByAggregateInput
    _sum?: rrhh_rolSumOrderByAggregateInput
  }

  export type rrhh_rolScalarWhereWithAggregatesInput = {
    AND?: rrhh_rolScalarWhereWithAggregatesInput | rrhh_rolScalarWhereWithAggregatesInput[]
    OR?: rrhh_rolScalarWhereWithAggregatesInput[]
    NOT?: rrhh_rolScalarWhereWithAggregatesInput | rrhh_rolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"rrhh_rol"> | number
    nombre?: StringWithAggregatesFilter<"rrhh_rol"> | string
    descripcion?: StringNullableWithAggregatesFilter<"rrhh_rol"> | string | null
  }

  export type rrhh_empleado_rolWhereInput = {
    AND?: rrhh_empleado_rolWhereInput | rrhh_empleado_rolWhereInput[]
    OR?: rrhh_empleado_rolWhereInput[]
    NOT?: rrhh_empleado_rolWhereInput | rrhh_empleado_rolWhereInput[]
    id_empleado?: IntFilter<"rrhh_empleado_rol"> | number
    id_rol?: IntFilter<"rrhh_empleado_rol"> | number
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
    rol?: XOR<Rrhh_rolScalarRelationFilter, rrhh_rolWhereInput>
  }

  export type rrhh_empleado_rolOrderByWithRelationInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
    rol?: rrhh_rolOrderByWithRelationInput
  }

  export type rrhh_empleado_rolWhereUniqueInput = Prisma.AtLeast<{
    id_empleado_id_rol?: rrhh_empleado_rolId_empleadoId_rolCompoundUniqueInput
    AND?: rrhh_empleado_rolWhereInput | rrhh_empleado_rolWhereInput[]
    OR?: rrhh_empleado_rolWhereInput[]
    NOT?: rrhh_empleado_rolWhereInput | rrhh_empleado_rolWhereInput[]
    id_empleado?: IntFilter<"rrhh_empleado_rol"> | number
    id_rol?: IntFilter<"rrhh_empleado_rol"> | number
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
    rol?: XOR<Rrhh_rolScalarRelationFilter, rrhh_rolWhereInput>
  }, "id_empleado_id_rol">

  export type rrhh_empleado_rolOrderByWithAggregationInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
    _count?: rrhh_empleado_rolCountOrderByAggregateInput
    _avg?: rrhh_empleado_rolAvgOrderByAggregateInput
    _max?: rrhh_empleado_rolMaxOrderByAggregateInput
    _min?: rrhh_empleado_rolMinOrderByAggregateInput
    _sum?: rrhh_empleado_rolSumOrderByAggregateInput
  }

  export type rrhh_empleado_rolScalarWhereWithAggregatesInput = {
    AND?: rrhh_empleado_rolScalarWhereWithAggregatesInput | rrhh_empleado_rolScalarWhereWithAggregatesInput[]
    OR?: rrhh_empleado_rolScalarWhereWithAggregatesInput[]
    NOT?: rrhh_empleado_rolScalarWhereWithAggregatesInput | rrhh_empleado_rolScalarWhereWithAggregatesInput[]
    id_empleado?: IntWithAggregatesFilter<"rrhh_empleado_rol"> | number
    id_rol?: IntWithAggregatesFilter<"rrhh_empleado_rol"> | number
  }

  export type rrhh_ausenciaWhereInput = {
    AND?: rrhh_ausenciaWhereInput | rrhh_ausenciaWhereInput[]
    OR?: rrhh_ausenciaWhereInput[]
    NOT?: rrhh_ausenciaWhereInput | rrhh_ausenciaWhereInput[]
    id_ausencia?: IntFilter<"rrhh_ausencia"> | number
    id_empleado?: IntFilter<"rrhh_ausencia"> | number
    tipo?: StringFilter<"rrhh_ausencia"> | string
    fecha_inicio?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    fecha_fin?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    estado?: StringFilter<"rrhh_ausencia"> | string
    motivo?: StringNullableFilter<"rrhh_ausencia"> | string | null
    fecha_solicitud?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
  }

  export type rrhh_ausenciaOrderByWithRelationInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
    tipo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    motivo?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type rrhh_ausenciaWhereUniqueInput = Prisma.AtLeast<{
    id_ausencia?: number
    AND?: rrhh_ausenciaWhereInput | rrhh_ausenciaWhereInput[]
    OR?: rrhh_ausenciaWhereInput[]
    NOT?: rrhh_ausenciaWhereInput | rrhh_ausenciaWhereInput[]
    id_empleado?: IntFilter<"rrhh_ausencia"> | number
    tipo?: StringFilter<"rrhh_ausencia"> | string
    fecha_inicio?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    fecha_fin?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    estado?: StringFilter<"rrhh_ausencia"> | string
    motivo?: StringNullableFilter<"rrhh_ausencia"> | string | null
    fecha_solicitud?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    empleado?: XOR<EmpleadoScalarRelationFilter, empleadoWhereInput>
  }, "id_ausencia">

  export type rrhh_ausenciaOrderByWithAggregationInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
    tipo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    motivo?: SortOrderInput | SortOrder
    fecha_solicitud?: SortOrder
    _count?: rrhh_ausenciaCountOrderByAggregateInput
    _avg?: rrhh_ausenciaAvgOrderByAggregateInput
    _max?: rrhh_ausenciaMaxOrderByAggregateInput
    _min?: rrhh_ausenciaMinOrderByAggregateInput
    _sum?: rrhh_ausenciaSumOrderByAggregateInput
  }

  export type rrhh_ausenciaScalarWhereWithAggregatesInput = {
    AND?: rrhh_ausenciaScalarWhereWithAggregatesInput | rrhh_ausenciaScalarWhereWithAggregatesInput[]
    OR?: rrhh_ausenciaScalarWhereWithAggregatesInput[]
    NOT?: rrhh_ausenciaScalarWhereWithAggregatesInput | rrhh_ausenciaScalarWhereWithAggregatesInput[]
    id_ausencia?: IntWithAggregatesFilter<"rrhh_ausencia"> | number
    id_empleado?: IntWithAggregatesFilter<"rrhh_ausencia"> | number
    tipo?: StringWithAggregatesFilter<"rrhh_ausencia"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"rrhh_ausencia"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"rrhh_ausencia"> | Date | string
    estado?: StringWithAggregatesFilter<"rrhh_ausencia"> | string
    motivo?: StringNullableWithAggregatesFilter<"rrhh_ausencia"> | string | null
    fecha_solicitud?: DateTimeWithAggregatesFilter<"rrhh_ausencia"> | Date | string
  }

  export type empleadoCreateInput = {
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioCreateNestedOneWithoutEmpleadoInput
    departamento: rrhh_departamentoCreateNestedOneWithoutEmpleadosInput
  }

  export type empleadoUncheckedCreateInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    id_departamento: number
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolUncheckedCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type empleadoUpdateInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUpdateOneWithoutEmpleadoNestedInput
    departamento?: rrhh_departamentoUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type empleadoUncheckedUpdateInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_departamento?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type empleadoCreateManyInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    id_departamento: number
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
  }

  export type empleadoUpdateManyMutationInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type empleadoUncheckedUpdateManyInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_departamento?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rrhh_departamentoCreateInput = {
    nombre: string
    empleados?: empleadoCreateNestedManyWithoutDepartamentoInput
  }

  export type rrhh_departamentoUncheckedCreateInput = {
    id_departamento?: number
    nombre: string
    empleados?: empleadoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type rrhh_departamentoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    empleados?: empleadoUpdateManyWithoutDepartamentoNestedInput
  }

  export type rrhh_departamentoUncheckedUpdateInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    empleados?: empleadoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type rrhh_departamentoCreateManyInput = {
    id_departamento?: number
    nombre: string
  }

  export type rrhh_departamentoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rrhh_departamentoUncheckedUpdateManyInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rrhh_usuarioCreateInput = {
    password_hash: string
    activo?: boolean
    empleado: empleadoCreateNestedOneWithoutUsuarioInput
  }

  export type rrhh_usuarioUncheckedCreateInput = {
    id_usuario?: number
    id_empleado: number
    password_hash: string
    activo?: boolean
  }

  export type rrhh_usuarioUpdateInput = {
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    empleado?: empleadoUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type rrhh_usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_empleado?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rrhh_usuarioCreateManyInput = {
    id_usuario?: number
    id_empleado: number
    password_hash: string
    activo?: boolean
  }

  export type rrhh_usuarioUpdateManyMutationInput = {
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rrhh_usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_empleado?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rrhh_rolCreateInput = {
    nombre: string
    descripcion?: string | null
    empleados?: rrhh_empleado_rolCreateNestedManyWithoutRolInput
  }

  export type rrhh_rolUncheckedCreateInput = {
    id_rol?: number
    nombre: string
    descripcion?: string | null
    empleados?: rrhh_empleado_rolUncheckedCreateNestedManyWithoutRolInput
  }

  export type rrhh_rolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    empleados?: rrhh_empleado_rolUpdateManyWithoutRolNestedInput
  }

  export type rrhh_rolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    empleados?: rrhh_empleado_rolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rrhh_rolCreateManyInput = {
    id_rol?: number
    nombre: string
    descripcion?: string | null
  }

  export type rrhh_rolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rrhh_rolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rrhh_empleado_rolCreateInput = {
    empleado: empleadoCreateNestedOneWithoutRolesInput
    rol: rrhh_rolCreateNestedOneWithoutEmpleadosInput
  }

  export type rrhh_empleado_rolUncheckedCreateInput = {
    id_empleado: number
    id_rol: number
  }

  export type rrhh_empleado_rolUpdateInput = {
    empleado?: empleadoUpdateOneRequiredWithoutRolesNestedInput
    rol?: rrhh_rolUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type rrhh_empleado_rolUncheckedUpdateInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type rrhh_empleado_rolCreateManyInput = {
    id_empleado: number
    id_rol: number
  }

  export type rrhh_empleado_rolUpdateManyMutationInput = {

  }

  export type rrhh_empleado_rolUncheckedUpdateManyInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type rrhh_ausenciaCreateInput = {
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
    empleado: empleadoCreateNestedOneWithoutAusenciasInput
  }

  export type rrhh_ausenciaUncheckedCreateInput = {
    id_ausencia?: number
    id_empleado: number
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
  }

  export type rrhh_ausenciaUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutAusenciasNestedInput
  }

  export type rrhh_ausenciaUncheckedUpdateInput = {
    id_ausencia?: IntFieldUpdateOperationsInput | number
    id_empleado?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rrhh_ausenciaCreateManyInput = {
    id_ausencia?: number
    id_empleado: number
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
  }

  export type rrhh_ausenciaUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rrhh_ausenciaUncheckedUpdateManyInput = {
    id_ausencia?: IntFieldUpdateOperationsInput | number
    id_empleado?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Rrhh_ausenciaListRelationFilter = {
    every?: rrhh_ausenciaWhereInput
    some?: rrhh_ausenciaWhereInput
    none?: rrhh_ausenciaWhereInput
  }

  export type Rrhh_empleado_rolListRelationFilter = {
    every?: rrhh_empleado_rolWhereInput
    some?: rrhh_empleado_rolWhereInput
    none?: rrhh_empleado_rolWhereInput
  }

  export type Rrhh_usuarioNullableScalarRelationFilter = {
    is?: rrhh_usuarioWhereInput | null
    isNot?: rrhh_usuarioWhereInput | null
  }

  export type Rrhh_departamentoScalarRelationFilter = {
    is?: rrhh_departamentoWhereInput
    isNot?: rrhh_departamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rrhh_ausenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rrhh_empleado_rolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empleadoCountOrderByAggregateInput = {
    id_empleado?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    fecha_ingreso?: SortOrder
    id_departamento?: SortOrder
    estado?: SortOrder
    fecha_baja?: SortOrder
    motivo_baja?: SortOrder
  }

  export type empleadoAvgOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_departamento?: SortOrder
  }

  export type empleadoMaxOrderByAggregateInput = {
    id_empleado?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    fecha_ingreso?: SortOrder
    id_departamento?: SortOrder
    estado?: SortOrder
    fecha_baja?: SortOrder
    motivo_baja?: SortOrder
  }

  export type empleadoMinOrderByAggregateInput = {
    id_empleado?: SortOrder
    rut?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    fecha_ingreso?: SortOrder
    id_departamento?: SortOrder
    estado?: SortOrder
    fecha_baja?: SortOrder
    motivo_baja?: SortOrder
  }

  export type empleadoSumOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_departamento?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmpleadoListRelationFilter = {
    every?: empleadoWhereInput
    some?: empleadoWhereInput
    none?: empleadoWhereInput
  }

  export type empleadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rrhh_departamentoCountOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
  }

  export type rrhh_departamentoAvgOrderByAggregateInput = {
    id_departamento?: SortOrder
  }

  export type rrhh_departamentoMaxOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
  }

  export type rrhh_departamentoMinOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
  }

  export type rrhh_departamentoSumOrderByAggregateInput = {
    id_departamento?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmpleadoScalarRelationFilter = {
    is?: empleadoWhereInput
    isNot?: empleadoWhereInput
  }

  export type rrhh_usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
  }

  export type rrhh_usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
  }

  export type rrhh_usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
  }

  export type rrhh_usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
  }

  export type rrhh_usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_empleado?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type rrhh_rolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rrhh_rolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type rrhh_rolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rrhh_rolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rrhh_rolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type Rrhh_rolScalarRelationFilter = {
    is?: rrhh_rolWhereInput
    isNot?: rrhh_rolWhereInput
  }

  export type rrhh_empleado_rolId_empleadoId_rolCompoundUniqueInput = {
    id_empleado: number
    id_rol: number
  }

  export type rrhh_empleado_rolCountOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
  }

  export type rrhh_empleado_rolAvgOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
  }

  export type rrhh_empleado_rolMaxOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
  }

  export type rrhh_empleado_rolMinOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
  }

  export type rrhh_empleado_rolSumOrderByAggregateInput = {
    id_empleado?: SortOrder
    id_rol?: SortOrder
  }

  export type rrhh_ausenciaCountOrderByAggregateInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
    tipo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    fecha_solicitud?: SortOrder
  }

  export type rrhh_ausenciaAvgOrderByAggregateInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
  }

  export type rrhh_ausenciaMaxOrderByAggregateInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
    tipo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    fecha_solicitud?: SortOrder
  }

  export type rrhh_ausenciaMinOrderByAggregateInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
    tipo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    motivo?: SortOrder
    fecha_solicitud?: SortOrder
  }

  export type rrhh_ausenciaSumOrderByAggregateInput = {
    id_ausencia?: SortOrder
    id_empleado?: SortOrder
  }

  export type rrhh_ausenciaCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput> | rrhh_ausenciaCreateWithoutEmpleadoInput[] | rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput | rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: rrhh_ausenciaCreateManyEmpleadoInputEnvelope
    connect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
  }

  export type rrhh_empleado_rolCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput> | rrhh_empleado_rolCreateWithoutEmpleadoInput[] | rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput | rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput[]
    createMany?: rrhh_empleado_rolCreateManyEmpleadoInputEnvelope
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
  }

  export type rrhh_usuarioCreateNestedOneWithoutEmpleadoInput = {
    create?: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: rrhh_usuarioCreateOrConnectWithoutEmpleadoInput
    connect?: rrhh_usuarioWhereUniqueInput
  }

  export type rrhh_departamentoCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<rrhh_departamentoCreateWithoutEmpleadosInput, rrhh_departamentoUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rrhh_departamentoCreateOrConnectWithoutEmpleadosInput
    connect?: rrhh_departamentoWhereUniqueInput
  }

  export type rrhh_ausenciaUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput> | rrhh_ausenciaCreateWithoutEmpleadoInput[] | rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput | rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: rrhh_ausenciaCreateManyEmpleadoInputEnvelope
    connect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
  }

  export type rrhh_empleado_rolUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput> | rrhh_empleado_rolCreateWithoutEmpleadoInput[] | rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput | rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput[]
    createMany?: rrhh_empleado_rolCreateManyEmpleadoInputEnvelope
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
  }

  export type rrhh_usuarioUncheckedCreateNestedOneWithoutEmpleadoInput = {
    create?: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: rrhh_usuarioCreateOrConnectWithoutEmpleadoInput
    connect?: rrhh_usuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type rrhh_ausenciaUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput> | rrhh_ausenciaCreateWithoutEmpleadoInput[] | rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput | rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: rrhh_ausenciaUpsertWithWhereUniqueWithoutEmpleadoInput | rrhh_ausenciaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: rrhh_ausenciaCreateManyEmpleadoInputEnvelope
    set?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    disconnect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    delete?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    connect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    update?: rrhh_ausenciaUpdateWithWhereUniqueWithoutEmpleadoInput | rrhh_ausenciaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: rrhh_ausenciaUpdateManyWithWhereWithoutEmpleadoInput | rrhh_ausenciaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: rrhh_ausenciaScalarWhereInput | rrhh_ausenciaScalarWhereInput[]
  }

  export type rrhh_empleado_rolUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput> | rrhh_empleado_rolCreateWithoutEmpleadoInput[] | rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput | rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput[]
    upsert?: rrhh_empleado_rolUpsertWithWhereUniqueWithoutEmpleadoInput | rrhh_empleado_rolUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: rrhh_empleado_rolCreateManyEmpleadoInputEnvelope
    set?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    disconnect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    delete?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    update?: rrhh_empleado_rolUpdateWithWhereUniqueWithoutEmpleadoInput | rrhh_empleado_rolUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: rrhh_empleado_rolUpdateManyWithWhereWithoutEmpleadoInput | rrhh_empleado_rolUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
  }

  export type rrhh_usuarioUpdateOneWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: rrhh_usuarioCreateOrConnectWithoutEmpleadoInput
    upsert?: rrhh_usuarioUpsertWithoutEmpleadoInput
    disconnect?: rrhh_usuarioWhereInput | boolean
    delete?: rrhh_usuarioWhereInput | boolean
    connect?: rrhh_usuarioWhereUniqueInput
    update?: XOR<XOR<rrhh_usuarioUpdateToOneWithWhereWithoutEmpleadoInput, rrhh_usuarioUpdateWithoutEmpleadoInput>, rrhh_usuarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type rrhh_departamentoUpdateOneRequiredWithoutEmpleadosNestedInput = {
    create?: XOR<rrhh_departamentoCreateWithoutEmpleadosInput, rrhh_departamentoUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rrhh_departamentoCreateOrConnectWithoutEmpleadosInput
    upsert?: rrhh_departamentoUpsertWithoutEmpleadosInput
    connect?: rrhh_departamentoWhereUniqueInput
    update?: XOR<XOR<rrhh_departamentoUpdateToOneWithWhereWithoutEmpleadosInput, rrhh_departamentoUpdateWithoutEmpleadosInput>, rrhh_departamentoUncheckedUpdateWithoutEmpleadosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput> | rrhh_ausenciaCreateWithoutEmpleadoInput[] | rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput | rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: rrhh_ausenciaUpsertWithWhereUniqueWithoutEmpleadoInput | rrhh_ausenciaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: rrhh_ausenciaCreateManyEmpleadoInputEnvelope
    set?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    disconnect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    delete?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    connect?: rrhh_ausenciaWhereUniqueInput | rrhh_ausenciaWhereUniqueInput[]
    update?: rrhh_ausenciaUpdateWithWhereUniqueWithoutEmpleadoInput | rrhh_ausenciaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: rrhh_ausenciaUpdateManyWithWhereWithoutEmpleadoInput | rrhh_ausenciaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: rrhh_ausenciaScalarWhereInput | rrhh_ausenciaScalarWhereInput[]
  }

  export type rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput> | rrhh_empleado_rolCreateWithoutEmpleadoInput[] | rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput | rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput[]
    upsert?: rrhh_empleado_rolUpsertWithWhereUniqueWithoutEmpleadoInput | rrhh_empleado_rolUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: rrhh_empleado_rolCreateManyEmpleadoInputEnvelope
    set?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    disconnect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    delete?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    update?: rrhh_empleado_rolUpdateWithWhereUniqueWithoutEmpleadoInput | rrhh_empleado_rolUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: rrhh_empleado_rolUpdateManyWithWhereWithoutEmpleadoInput | rrhh_empleado_rolUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
  }

  export type rrhh_usuarioUncheckedUpdateOneWithoutEmpleadoNestedInput = {
    create?: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: rrhh_usuarioCreateOrConnectWithoutEmpleadoInput
    upsert?: rrhh_usuarioUpsertWithoutEmpleadoInput
    disconnect?: rrhh_usuarioWhereInput | boolean
    delete?: rrhh_usuarioWhereInput | boolean
    connect?: rrhh_usuarioWhereUniqueInput
    update?: XOR<XOR<rrhh_usuarioUpdateToOneWithWhereWithoutEmpleadoInput, rrhh_usuarioUpdateWithoutEmpleadoInput>, rrhh_usuarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type empleadoCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput> | empleadoCreateWithoutDepartamentoInput[] | empleadoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutDepartamentoInput | empleadoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: empleadoCreateManyDepartamentoInputEnvelope
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
  }

  export type empleadoUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput> | empleadoCreateWithoutDepartamentoInput[] | empleadoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutDepartamentoInput | empleadoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: empleadoCreateManyDepartamentoInputEnvelope
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
  }

  export type empleadoUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput> | empleadoCreateWithoutDepartamentoInput[] | empleadoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutDepartamentoInput | empleadoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: empleadoUpsertWithWhereUniqueWithoutDepartamentoInput | empleadoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: empleadoCreateManyDepartamentoInputEnvelope
    set?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    disconnect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    delete?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    update?: empleadoUpdateWithWhereUniqueWithoutDepartamentoInput | empleadoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: empleadoUpdateManyWithWhereWithoutDepartamentoInput | empleadoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
  }

  export type empleadoUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput> | empleadoCreateWithoutDepartamentoInput[] | empleadoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutDepartamentoInput | empleadoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: empleadoUpsertWithWhereUniqueWithoutDepartamentoInput | empleadoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: empleadoCreateManyDepartamentoInputEnvelope
    set?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    disconnect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    delete?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    update?: empleadoUpdateWithWhereUniqueWithoutDepartamentoInput | empleadoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: empleadoUpdateManyWithWhereWithoutDepartamentoInput | empleadoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
  }

  export type empleadoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<empleadoCreateWithoutUsuarioInput, empleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutUsuarioInput
    connect?: empleadoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type empleadoUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<empleadoCreateWithoutUsuarioInput, empleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutUsuarioInput
    upsert?: empleadoUpsertWithoutUsuarioInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutUsuarioInput, empleadoUpdateWithoutUsuarioInput>, empleadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type rrhh_empleado_rolCreateNestedManyWithoutRolInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput> | rrhh_empleado_rolCreateWithoutRolInput[] | rrhh_empleado_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutRolInput | rrhh_empleado_rolCreateOrConnectWithoutRolInput[]
    createMany?: rrhh_empleado_rolCreateManyRolInputEnvelope
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
  }

  export type rrhh_empleado_rolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput> | rrhh_empleado_rolCreateWithoutRolInput[] | rrhh_empleado_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutRolInput | rrhh_empleado_rolCreateOrConnectWithoutRolInput[]
    createMany?: rrhh_empleado_rolCreateManyRolInputEnvelope
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
  }

  export type rrhh_empleado_rolUpdateManyWithoutRolNestedInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput> | rrhh_empleado_rolCreateWithoutRolInput[] | rrhh_empleado_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutRolInput | rrhh_empleado_rolCreateOrConnectWithoutRolInput[]
    upsert?: rrhh_empleado_rolUpsertWithWhereUniqueWithoutRolInput | rrhh_empleado_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: rrhh_empleado_rolCreateManyRolInputEnvelope
    set?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    disconnect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    delete?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    update?: rrhh_empleado_rolUpdateWithWhereUniqueWithoutRolInput | rrhh_empleado_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: rrhh_empleado_rolUpdateManyWithWhereWithoutRolInput | rrhh_empleado_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
  }

  export type rrhh_empleado_rolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput> | rrhh_empleado_rolCreateWithoutRolInput[] | rrhh_empleado_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rrhh_empleado_rolCreateOrConnectWithoutRolInput | rrhh_empleado_rolCreateOrConnectWithoutRolInput[]
    upsert?: rrhh_empleado_rolUpsertWithWhereUniqueWithoutRolInput | rrhh_empleado_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: rrhh_empleado_rolCreateManyRolInputEnvelope
    set?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    disconnect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    delete?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    connect?: rrhh_empleado_rolWhereUniqueInput | rrhh_empleado_rolWhereUniqueInput[]
    update?: rrhh_empleado_rolUpdateWithWhereUniqueWithoutRolInput | rrhh_empleado_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: rrhh_empleado_rolUpdateManyWithWhereWithoutRolInput | rrhh_empleado_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
  }

  export type empleadoCreateNestedOneWithoutRolesInput = {
    create?: XOR<empleadoCreateWithoutRolesInput, empleadoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutRolesInput
    connect?: empleadoWhereUniqueInput
  }

  export type rrhh_rolCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<rrhh_rolCreateWithoutEmpleadosInput, rrhh_rolUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rrhh_rolCreateOrConnectWithoutEmpleadosInput
    connect?: rrhh_rolWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<empleadoCreateWithoutRolesInput, empleadoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutRolesInput
    upsert?: empleadoUpsertWithoutRolesInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutRolesInput, empleadoUpdateWithoutRolesInput>, empleadoUncheckedUpdateWithoutRolesInput>
  }

  export type rrhh_rolUpdateOneRequiredWithoutEmpleadosNestedInput = {
    create?: XOR<rrhh_rolCreateWithoutEmpleadosInput, rrhh_rolUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rrhh_rolCreateOrConnectWithoutEmpleadosInput
    upsert?: rrhh_rolUpsertWithoutEmpleadosInput
    connect?: rrhh_rolWhereUniqueInput
    update?: XOR<XOR<rrhh_rolUpdateToOneWithWhereWithoutEmpleadosInput, rrhh_rolUpdateWithoutEmpleadosInput>, rrhh_rolUncheckedUpdateWithoutEmpleadosInput>
  }

  export type empleadoCreateNestedOneWithoutAusenciasInput = {
    create?: XOR<empleadoCreateWithoutAusenciasInput, empleadoUncheckedCreateWithoutAusenciasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutAusenciasInput
    connect?: empleadoWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutAusenciasNestedInput = {
    create?: XOR<empleadoCreateWithoutAusenciasInput, empleadoUncheckedCreateWithoutAusenciasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutAusenciasInput
    upsert?: empleadoUpsertWithoutAusenciasInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutAusenciasInput, empleadoUpdateWithoutAusenciasInput>, empleadoUncheckedUpdateWithoutAusenciasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type rrhh_ausenciaCreateWithoutEmpleadoInput = {
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
  }

  export type rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput = {
    id_ausencia?: number
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
  }

  export type rrhh_ausenciaCreateOrConnectWithoutEmpleadoInput = {
    where: rrhh_ausenciaWhereUniqueInput
    create: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput>
  }

  export type rrhh_ausenciaCreateManyEmpleadoInputEnvelope = {
    data: rrhh_ausenciaCreateManyEmpleadoInput | rrhh_ausenciaCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type rrhh_empleado_rolCreateWithoutEmpleadoInput = {
    rol: rrhh_rolCreateNestedOneWithoutEmpleadosInput
  }

  export type rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput = {
    id_rol: number
  }

  export type rrhh_empleado_rolCreateOrConnectWithoutEmpleadoInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    create: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput>
  }

  export type rrhh_empleado_rolCreateManyEmpleadoInputEnvelope = {
    data: rrhh_empleado_rolCreateManyEmpleadoInput | rrhh_empleado_rolCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type rrhh_usuarioCreateWithoutEmpleadoInput = {
    password_hash: string
    activo?: boolean
  }

  export type rrhh_usuarioUncheckedCreateWithoutEmpleadoInput = {
    id_usuario?: number
    password_hash: string
    activo?: boolean
  }

  export type rrhh_usuarioCreateOrConnectWithoutEmpleadoInput = {
    where: rrhh_usuarioWhereUniqueInput
    create: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type rrhh_departamentoCreateWithoutEmpleadosInput = {
    nombre: string
  }

  export type rrhh_departamentoUncheckedCreateWithoutEmpleadosInput = {
    id_departamento?: number
    nombre: string
  }

  export type rrhh_departamentoCreateOrConnectWithoutEmpleadosInput = {
    where: rrhh_departamentoWhereUniqueInput
    create: XOR<rrhh_departamentoCreateWithoutEmpleadosInput, rrhh_departamentoUncheckedCreateWithoutEmpleadosInput>
  }

  export type rrhh_ausenciaUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: rrhh_ausenciaWhereUniqueInput
    update: XOR<rrhh_ausenciaUpdateWithoutEmpleadoInput, rrhh_ausenciaUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<rrhh_ausenciaCreateWithoutEmpleadoInput, rrhh_ausenciaUncheckedCreateWithoutEmpleadoInput>
  }

  export type rrhh_ausenciaUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: rrhh_ausenciaWhereUniqueInput
    data: XOR<rrhh_ausenciaUpdateWithoutEmpleadoInput, rrhh_ausenciaUncheckedUpdateWithoutEmpleadoInput>
  }

  export type rrhh_ausenciaUpdateManyWithWhereWithoutEmpleadoInput = {
    where: rrhh_ausenciaScalarWhereInput
    data: XOR<rrhh_ausenciaUpdateManyMutationInput, rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type rrhh_ausenciaScalarWhereInput = {
    AND?: rrhh_ausenciaScalarWhereInput | rrhh_ausenciaScalarWhereInput[]
    OR?: rrhh_ausenciaScalarWhereInput[]
    NOT?: rrhh_ausenciaScalarWhereInput | rrhh_ausenciaScalarWhereInput[]
    id_ausencia?: IntFilter<"rrhh_ausencia"> | number
    id_empleado?: IntFilter<"rrhh_ausencia"> | number
    tipo?: StringFilter<"rrhh_ausencia"> | string
    fecha_inicio?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    fecha_fin?: DateTimeFilter<"rrhh_ausencia"> | Date | string
    estado?: StringFilter<"rrhh_ausencia"> | string
    motivo?: StringNullableFilter<"rrhh_ausencia"> | string | null
    fecha_solicitud?: DateTimeFilter<"rrhh_ausencia"> | Date | string
  }

  export type rrhh_empleado_rolUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    update: XOR<rrhh_empleado_rolUpdateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<rrhh_empleado_rolCreateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedCreateWithoutEmpleadoInput>
  }

  export type rrhh_empleado_rolUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    data: XOR<rrhh_empleado_rolUpdateWithoutEmpleadoInput, rrhh_empleado_rolUncheckedUpdateWithoutEmpleadoInput>
  }

  export type rrhh_empleado_rolUpdateManyWithWhereWithoutEmpleadoInput = {
    where: rrhh_empleado_rolScalarWhereInput
    data: XOR<rrhh_empleado_rolUpdateManyMutationInput, rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type rrhh_empleado_rolScalarWhereInput = {
    AND?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
    OR?: rrhh_empleado_rolScalarWhereInput[]
    NOT?: rrhh_empleado_rolScalarWhereInput | rrhh_empleado_rolScalarWhereInput[]
    id_empleado?: IntFilter<"rrhh_empleado_rol"> | number
    id_rol?: IntFilter<"rrhh_empleado_rol"> | number
  }

  export type rrhh_usuarioUpsertWithoutEmpleadoInput = {
    update: XOR<rrhh_usuarioUpdateWithoutEmpleadoInput, rrhh_usuarioUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<rrhh_usuarioCreateWithoutEmpleadoInput, rrhh_usuarioUncheckedCreateWithoutEmpleadoInput>
    where?: rrhh_usuarioWhereInput
  }

  export type rrhh_usuarioUpdateToOneWithWhereWithoutEmpleadoInput = {
    where?: rrhh_usuarioWhereInput
    data: XOR<rrhh_usuarioUpdateWithoutEmpleadoInput, rrhh_usuarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type rrhh_usuarioUpdateWithoutEmpleadoInput = {
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rrhh_usuarioUncheckedUpdateWithoutEmpleadoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rrhh_departamentoUpsertWithoutEmpleadosInput = {
    update: XOR<rrhh_departamentoUpdateWithoutEmpleadosInput, rrhh_departamentoUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<rrhh_departamentoCreateWithoutEmpleadosInput, rrhh_departamentoUncheckedCreateWithoutEmpleadosInput>
    where?: rrhh_departamentoWhereInput
  }

  export type rrhh_departamentoUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: rrhh_departamentoWhereInput
    data: XOR<rrhh_departamentoUpdateWithoutEmpleadosInput, rrhh_departamentoUncheckedUpdateWithoutEmpleadosInput>
  }

  export type rrhh_departamentoUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rrhh_departamentoUncheckedUpdateWithoutEmpleadosInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type empleadoCreateWithoutDepartamentoInput = {
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioCreateNestedOneWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutDepartamentoInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolUncheckedCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutDepartamentoInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput>
  }

  export type empleadoCreateManyDepartamentoInputEnvelope = {
    data: empleadoCreateManyDepartamentoInput | empleadoCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type empleadoUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: empleadoWhereUniqueInput
    update: XOR<empleadoUpdateWithoutDepartamentoInput, empleadoUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<empleadoCreateWithoutDepartamentoInput, empleadoUncheckedCreateWithoutDepartamentoInput>
  }

  export type empleadoUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: empleadoWhereUniqueInput
    data: XOR<empleadoUpdateWithoutDepartamentoInput, empleadoUncheckedUpdateWithoutDepartamentoInput>
  }

  export type empleadoUpdateManyWithWhereWithoutDepartamentoInput = {
    where: empleadoScalarWhereInput
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type empleadoScalarWhereInput = {
    AND?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
    OR?: empleadoScalarWhereInput[]
    NOT?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
    id_empleado?: IntFilter<"empleado"> | number
    rut?: StringFilter<"empleado"> | string
    nombre?: StringFilter<"empleado"> | string
    apellido?: StringFilter<"empleado"> | string
    rol?: StringFilter<"empleado"> | string
    email?: StringFilter<"empleado"> | string
    telefono?: StringNullableFilter<"empleado"> | string | null
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_departamento?: IntFilter<"empleado"> | number
    estado?: StringFilter<"empleado"> | string
    fecha_baja?: DateTimeNullableFilter<"empleado"> | Date | string | null
    motivo_baja?: StringNullableFilter<"empleado"> | string | null
  }

  export type empleadoCreateWithoutUsuarioInput = {
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolCreateNestedManyWithoutEmpleadoInput
    departamento: rrhh_departamentoCreateNestedOneWithoutEmpleadosInput
  }

  export type empleadoUncheckedCreateWithoutUsuarioInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    id_departamento: number
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    roles?: rrhh_empleado_rolUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutUsuarioInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutUsuarioInput, empleadoUncheckedCreateWithoutUsuarioInput>
  }

  export type empleadoUpsertWithoutUsuarioInput = {
    update: XOR<empleadoUpdateWithoutUsuarioInput, empleadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<empleadoCreateWithoutUsuarioInput, empleadoUncheckedCreateWithoutUsuarioInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutUsuarioInput, empleadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type empleadoUpdateWithoutUsuarioInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUpdateManyWithoutEmpleadoNestedInput
    departamento?: rrhh_departamentoUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type empleadoUncheckedUpdateWithoutUsuarioInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_departamento?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type rrhh_empleado_rolCreateWithoutRolInput = {
    empleado: empleadoCreateNestedOneWithoutRolesInput
  }

  export type rrhh_empleado_rolUncheckedCreateWithoutRolInput = {
    id_empleado: number
  }

  export type rrhh_empleado_rolCreateOrConnectWithoutRolInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    create: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput>
  }

  export type rrhh_empleado_rolCreateManyRolInputEnvelope = {
    data: rrhh_empleado_rolCreateManyRolInput | rrhh_empleado_rolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type rrhh_empleado_rolUpsertWithWhereUniqueWithoutRolInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    update: XOR<rrhh_empleado_rolUpdateWithoutRolInput, rrhh_empleado_rolUncheckedUpdateWithoutRolInput>
    create: XOR<rrhh_empleado_rolCreateWithoutRolInput, rrhh_empleado_rolUncheckedCreateWithoutRolInput>
  }

  export type rrhh_empleado_rolUpdateWithWhereUniqueWithoutRolInput = {
    where: rrhh_empleado_rolWhereUniqueInput
    data: XOR<rrhh_empleado_rolUpdateWithoutRolInput, rrhh_empleado_rolUncheckedUpdateWithoutRolInput>
  }

  export type rrhh_empleado_rolUpdateManyWithWhereWithoutRolInput = {
    where: rrhh_empleado_rolScalarWhereInput
    data: XOR<rrhh_empleado_rolUpdateManyMutationInput, rrhh_empleado_rolUncheckedUpdateManyWithoutRolInput>
  }

  export type empleadoCreateWithoutRolesInput = {
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioCreateNestedOneWithoutEmpleadoInput
    departamento: rrhh_departamentoCreateNestedOneWithoutEmpleadosInput
  }

  export type empleadoUncheckedCreateWithoutRolesInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    id_departamento: number
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    ausencias?: rrhh_ausenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutRolesInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutRolesInput, empleadoUncheckedCreateWithoutRolesInput>
  }

  export type rrhh_rolCreateWithoutEmpleadosInput = {
    nombre: string
    descripcion?: string | null
  }

  export type rrhh_rolUncheckedCreateWithoutEmpleadosInput = {
    id_rol?: number
    nombre: string
    descripcion?: string | null
  }

  export type rrhh_rolCreateOrConnectWithoutEmpleadosInput = {
    where: rrhh_rolWhereUniqueInput
    create: XOR<rrhh_rolCreateWithoutEmpleadosInput, rrhh_rolUncheckedCreateWithoutEmpleadosInput>
  }

  export type empleadoUpsertWithoutRolesInput = {
    update: XOR<empleadoUpdateWithoutRolesInput, empleadoUncheckedUpdateWithoutRolesInput>
    create: XOR<empleadoCreateWithoutRolesInput, empleadoUncheckedCreateWithoutRolesInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutRolesInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutRolesInput, empleadoUncheckedUpdateWithoutRolesInput>
  }

  export type empleadoUpdateWithoutRolesInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUpdateOneWithoutEmpleadoNestedInput
    departamento?: rrhh_departamentoUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type empleadoUncheckedUpdateWithoutRolesInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_departamento?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type rrhh_rolUpsertWithoutEmpleadosInput = {
    update: XOR<rrhh_rolUpdateWithoutEmpleadosInput, rrhh_rolUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<rrhh_rolCreateWithoutEmpleadosInput, rrhh_rolUncheckedCreateWithoutEmpleadosInput>
    where?: rrhh_rolWhereInput
  }

  export type rrhh_rolUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: rrhh_rolWhereInput
    data: XOR<rrhh_rolUpdateWithoutEmpleadosInput, rrhh_rolUncheckedUpdateWithoutEmpleadosInput>
  }

  export type rrhh_rolUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rrhh_rolUncheckedUpdateWithoutEmpleadosInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type empleadoCreateWithoutAusenciasInput = {
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    roles?: rrhh_empleado_rolCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioCreateNestedOneWithoutEmpleadoInput
    departamento: rrhh_departamentoCreateNestedOneWithoutEmpleadosInput
  }

  export type empleadoUncheckedCreateWithoutAusenciasInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    id_departamento: number
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
    roles?: rrhh_empleado_rolUncheckedCreateNestedManyWithoutEmpleadoInput
    usuario?: rrhh_usuarioUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutAusenciasInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutAusenciasInput, empleadoUncheckedCreateWithoutAusenciasInput>
  }

  export type empleadoUpsertWithoutAusenciasInput = {
    update: XOR<empleadoUpdateWithoutAusenciasInput, empleadoUncheckedUpdateWithoutAusenciasInput>
    create: XOR<empleadoCreateWithoutAusenciasInput, empleadoUncheckedCreateWithoutAusenciasInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutAusenciasInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutAusenciasInput, empleadoUncheckedUpdateWithoutAusenciasInput>
  }

  export type empleadoUpdateWithoutAusenciasInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: rrhh_empleado_rolUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUpdateOneWithoutEmpleadoNestedInput
    departamento?: rrhh_departamentoUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type empleadoUncheckedUpdateWithoutAusenciasInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_departamento?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type rrhh_ausenciaCreateManyEmpleadoInput = {
    id_ausencia?: number
    tipo: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: string
    motivo?: string | null
    fecha_solicitud?: Date | string
  }

  export type rrhh_empleado_rolCreateManyEmpleadoInput = {
    id_rol: number
  }

  export type rrhh_ausenciaUpdateWithoutEmpleadoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rrhh_ausenciaUncheckedUpdateWithoutEmpleadoInput = {
    id_ausencia?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoInput = {
    id_ausencia?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_solicitud?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rrhh_empleado_rolUpdateWithoutEmpleadoInput = {
    rol?: rrhh_rolUpdateOneRequiredWithoutEmpleadosNestedInput
  }

  export type rrhh_empleado_rolUncheckedUpdateWithoutEmpleadoInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type empleadoCreateManyDepartamentoInput = {
    id_empleado?: number
    rut: string
    nombre: string
    apellido: string
    rol: string
    email: string
    telefono?: string | null
    fecha_ingreso: Date | string
    estado: string
    fecha_baja?: Date | string | null
    motivo_baja?: string | null
  }

  export type empleadoUpdateWithoutDepartamentoInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUpdateOneWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutDepartamentoInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
    ausencias?: rrhh_ausenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    roles?: rrhh_empleado_rolUncheckedUpdateManyWithoutEmpleadoNestedInput
    usuario?: rrhh_usuarioUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateManyWithoutDepartamentoInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_baja?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rrhh_empleado_rolCreateManyRolInput = {
    id_empleado: number
  }

  export type rrhh_empleado_rolUpdateWithoutRolInput = {
    empleado?: empleadoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type rrhh_empleado_rolUncheckedUpdateWithoutRolInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
  }

  export type rrhh_empleado_rolUncheckedUpdateManyWithoutRolInput = {
    id_empleado?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}