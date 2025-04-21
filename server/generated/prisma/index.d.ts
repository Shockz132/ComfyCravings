
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
 * Model cc_food
 * 
 */
export type cc_food = $Result.DefaultSelection<Prisma.$cc_foodPayload>
/**
 * Model cc_food_nutrient
 * 
 */
export type cc_food_nutrient = $Result.DefaultSelection<Prisma.$cc_food_nutrientPayload>
/**
 * Model cc_illness
 * 
 */
export type cc_illness = $Result.DefaultSelection<Prisma.$cc_illnessPayload>
/**
 * Model cc_nutrient
 * 
 */
export type cc_nutrient = $Result.DefaultSelection<Prisma.$cc_nutrientPayload>
/**
 * Model cc_user
 * 
 */
export type cc_user = $Result.DefaultSelection<Prisma.$cc_userPayload>
/**
 * Model cc_user_illness
 * 
 */
export type cc_user_illness = $Result.DefaultSelection<Prisma.$cc_user_illnessPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cc_foods
 * const cc_foods = await prisma.cc_food.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cc_foods
   * const cc_foods = await prisma.cc_food.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cc_food`: Exposes CRUD operations for the **cc_food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_foods
    * const cc_foods = await prisma.cc_food.findMany()
    * ```
    */
  get cc_food(): Prisma.cc_foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cc_food_nutrient`: Exposes CRUD operations for the **cc_food_nutrient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_food_nutrients
    * const cc_food_nutrients = await prisma.cc_food_nutrient.findMany()
    * ```
    */
  get cc_food_nutrient(): Prisma.cc_food_nutrientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cc_illness`: Exposes CRUD operations for the **cc_illness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_illnesses
    * const cc_illnesses = await prisma.cc_illness.findMany()
    * ```
    */
  get cc_illness(): Prisma.cc_illnessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cc_nutrient`: Exposes CRUD operations for the **cc_nutrient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_nutrients
    * const cc_nutrients = await prisma.cc_nutrient.findMany()
    * ```
    */
  get cc_nutrient(): Prisma.cc_nutrientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cc_user`: Exposes CRUD operations for the **cc_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_users
    * const cc_users = await prisma.cc_user.findMany()
    * ```
    */
  get cc_user(): Prisma.cc_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cc_user_illness`: Exposes CRUD operations for the **cc_user_illness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_user_illnesses
    * const cc_user_illnesses = await prisma.cc_user_illness.findMany()
    * ```
    */
  get cc_user_illness(): Prisma.cc_user_illnessDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    cc_food: 'cc_food',
    cc_food_nutrient: 'cc_food_nutrient',
    cc_illness: 'cc_illness',
    cc_nutrient: 'cc_nutrient',
    cc_user: 'cc_user',
    cc_user_illness: 'cc_user_illness'
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
      modelProps: "cc_food" | "cc_food_nutrient" | "cc_illness" | "cc_nutrient" | "cc_user" | "cc_user_illness"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cc_food: {
        payload: Prisma.$cc_foodPayload<ExtArgs>
        fields: Prisma.cc_foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          findFirst: {
            args: Prisma.cc_foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          findMany: {
            args: Prisma.cc_foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>[]
          }
          create: {
            args: Prisma.cc_foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          createMany: {
            args: Prisma.cc_foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_foodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>[]
          }
          delete: {
            args: Prisma.cc_foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          update: {
            args: Prisma.cc_foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          deleteMany: {
            args: Prisma.cc_foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_foodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>[]
          }
          upsert: {
            args: Prisma.cc_foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_foodPayload>
          }
          aggregate: {
            args: Prisma.Cc_foodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_food>
          }
          groupBy: {
            args: Prisma.cc_foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_foodGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_foodCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_foodCountAggregateOutputType> | number
          }
        }
      }
      cc_food_nutrient: {
        payload: Prisma.$cc_food_nutrientPayload<ExtArgs>
        fields: Prisma.cc_food_nutrientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_food_nutrientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_food_nutrientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          findFirst: {
            args: Prisma.cc_food_nutrientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_food_nutrientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          findMany: {
            args: Prisma.cc_food_nutrientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>[]
          }
          create: {
            args: Prisma.cc_food_nutrientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          createMany: {
            args: Prisma.cc_food_nutrientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_food_nutrientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>[]
          }
          delete: {
            args: Prisma.cc_food_nutrientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          update: {
            args: Prisma.cc_food_nutrientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          deleteMany: {
            args: Prisma.cc_food_nutrientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_food_nutrientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_food_nutrientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>[]
          }
          upsert: {
            args: Prisma.cc_food_nutrientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_food_nutrientPayload>
          }
          aggregate: {
            args: Prisma.Cc_food_nutrientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_food_nutrient>
          }
          groupBy: {
            args: Prisma.cc_food_nutrientGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_food_nutrientGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_food_nutrientCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_food_nutrientCountAggregateOutputType> | number
          }
        }
      }
      cc_illness: {
        payload: Prisma.$cc_illnessPayload<ExtArgs>
        fields: Prisma.cc_illnessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_illnessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_illnessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          findFirst: {
            args: Prisma.cc_illnessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_illnessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          findMany: {
            args: Prisma.cc_illnessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>[]
          }
          create: {
            args: Prisma.cc_illnessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          createMany: {
            args: Prisma.cc_illnessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_illnessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>[]
          }
          delete: {
            args: Prisma.cc_illnessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          update: {
            args: Prisma.cc_illnessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          deleteMany: {
            args: Prisma.cc_illnessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_illnessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_illnessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>[]
          }
          upsert: {
            args: Prisma.cc_illnessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_illnessPayload>
          }
          aggregate: {
            args: Prisma.Cc_illnessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_illness>
          }
          groupBy: {
            args: Prisma.cc_illnessGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_illnessGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_illnessCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_illnessCountAggregateOutputType> | number
          }
        }
      }
      cc_nutrient: {
        payload: Prisma.$cc_nutrientPayload<ExtArgs>
        fields: Prisma.cc_nutrientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_nutrientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_nutrientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          findFirst: {
            args: Prisma.cc_nutrientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_nutrientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          findMany: {
            args: Prisma.cc_nutrientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>[]
          }
          create: {
            args: Prisma.cc_nutrientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          createMany: {
            args: Prisma.cc_nutrientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_nutrientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>[]
          }
          delete: {
            args: Prisma.cc_nutrientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          update: {
            args: Prisma.cc_nutrientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          deleteMany: {
            args: Prisma.cc_nutrientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_nutrientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_nutrientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>[]
          }
          upsert: {
            args: Prisma.cc_nutrientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_nutrientPayload>
          }
          aggregate: {
            args: Prisma.Cc_nutrientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_nutrient>
          }
          groupBy: {
            args: Prisma.cc_nutrientGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_nutrientGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_nutrientCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_nutrientCountAggregateOutputType> | number
          }
        }
      }
      cc_user: {
        payload: Prisma.$cc_userPayload<ExtArgs>
        fields: Prisma.cc_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          findFirst: {
            args: Prisma.cc_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          findMany: {
            args: Prisma.cc_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>[]
          }
          create: {
            args: Prisma.cc_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          createMany: {
            args: Prisma.cc_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>[]
          }
          delete: {
            args: Prisma.cc_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          update: {
            args: Prisma.cc_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          deleteMany: {
            args: Prisma.cc_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>[]
          }
          upsert: {
            args: Prisma.cc_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          aggregate: {
            args: Prisma.Cc_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_user>
          }
          groupBy: {
            args: Prisma.cc_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_userCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_userCountAggregateOutputType> | number
          }
        }
      }
      cc_user_illness: {
        payload: Prisma.$cc_user_illnessPayload<ExtArgs>
        fields: Prisma.cc_user_illnessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_user_illnessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_user_illnessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          findFirst: {
            args: Prisma.cc_user_illnessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_user_illnessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          findMany: {
            args: Prisma.cc_user_illnessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>[]
          }
          create: {
            args: Prisma.cc_user_illnessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          createMany: {
            args: Prisma.cc_user_illnessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cc_user_illnessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>[]
          }
          delete: {
            args: Prisma.cc_user_illnessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          update: {
            args: Prisma.cc_user_illnessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          deleteMany: {
            args: Prisma.cc_user_illnessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cc_user_illnessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cc_user_illnessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>[]
          }
          upsert: {
            args: Prisma.cc_user_illnessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cc_user_illnessPayload>
          }
          aggregate: {
            args: Prisma.Cc_user_illnessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCc_user_illness>
          }
          groupBy: {
            args: Prisma.cc_user_illnessGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cc_user_illnessGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_user_illnessCountArgs<ExtArgs>
            result: $Utils.Optional<Cc_user_illnessCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cc_food?: cc_foodOmit
    cc_food_nutrient?: cc_food_nutrientOmit
    cc_illness?: cc_illnessOmit
    cc_nutrient?: cc_nutrientOmit
    cc_user?: cc_userOmit
    cc_user_illness?: cc_user_illnessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Cc_foodCountOutputType
   */

  export type Cc_foodCountOutputType = {
    cc_food_nutrient: number
  }

  export type Cc_foodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food_nutrient?: boolean | Cc_foodCountOutputTypeCountCc_food_nutrientArgs
  }

  // Custom InputTypes
  /**
   * Cc_foodCountOutputType without action
   */
  export type Cc_foodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cc_foodCountOutputType
     */
    select?: Cc_foodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cc_foodCountOutputType without action
   */
  export type Cc_foodCountOutputTypeCountCc_food_nutrientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_food_nutrientWhereInput
  }


  /**
   * Count Type Cc_illnessCountOutputType
   */

  export type Cc_illnessCountOutputType = {
    cc_user_illness: number
  }

  export type Cc_illnessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_user_illness?: boolean | Cc_illnessCountOutputTypeCountCc_user_illnessArgs
  }

  // Custom InputTypes
  /**
   * Cc_illnessCountOutputType without action
   */
  export type Cc_illnessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cc_illnessCountOutputType
     */
    select?: Cc_illnessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cc_illnessCountOutputType without action
   */
  export type Cc_illnessCountOutputTypeCountCc_user_illnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_user_illnessWhereInput
  }


  /**
   * Count Type Cc_nutrientCountOutputType
   */

  export type Cc_nutrientCountOutputType = {
    cc_food_nutrient: number
  }

  export type Cc_nutrientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food_nutrient?: boolean | Cc_nutrientCountOutputTypeCountCc_food_nutrientArgs
  }

  // Custom InputTypes
  /**
   * Cc_nutrientCountOutputType without action
   */
  export type Cc_nutrientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cc_nutrientCountOutputType
     */
    select?: Cc_nutrientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cc_nutrientCountOutputType without action
   */
  export type Cc_nutrientCountOutputTypeCountCc_food_nutrientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_food_nutrientWhereInput
  }


  /**
   * Count Type Cc_userCountOutputType
   */

  export type Cc_userCountOutputType = {
    cc_user_illness: number
  }

  export type Cc_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_user_illness?: boolean | Cc_userCountOutputTypeCountCc_user_illnessArgs
  }

  // Custom InputTypes
  /**
   * Cc_userCountOutputType without action
   */
  export type Cc_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cc_userCountOutputType
     */
    select?: Cc_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cc_userCountOutputType without action
   */
  export type Cc_userCountOutputTypeCountCc_user_illnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_user_illnessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cc_food
   */

  export type AggregateCc_food = {
    _count: Cc_foodCountAggregateOutputType | null
    _avg: Cc_foodAvgAggregateOutputType | null
    _sum: Cc_foodSumAggregateOutputType | null
    _min: Cc_foodMinAggregateOutputType | null
    _max: Cc_foodMaxAggregateOutputType | null
  }

  export type Cc_foodAvgAggregateOutputType = {
    food_id: number | null
  }

  export type Cc_foodSumAggregateOutputType = {
    food_id: number | null
  }

  export type Cc_foodMinAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    food_description: string | null
  }

  export type Cc_foodMaxAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    food_description: string | null
  }

  export type Cc_foodCountAggregateOutputType = {
    food_id: number
    food_name: number
    food_description: number
    _all: number
  }


  export type Cc_foodAvgAggregateInputType = {
    food_id?: true
  }

  export type Cc_foodSumAggregateInputType = {
    food_id?: true
  }

  export type Cc_foodMinAggregateInputType = {
    food_id?: true
    food_name?: true
    food_description?: true
  }

  export type Cc_foodMaxAggregateInputType = {
    food_id?: true
    food_name?: true
    food_description?: true
  }

  export type Cc_foodCountAggregateInputType = {
    food_id?: true
    food_name?: true
    food_description?: true
    _all?: true
  }

  export type Cc_foodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_food to aggregate.
     */
    where?: cc_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_foods to fetch.
     */
    orderBy?: cc_foodOrderByWithRelationInput | cc_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_foods
    **/
    _count?: true | Cc_foodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_foodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_foodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_foodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_foodMaxAggregateInputType
  }

  export type GetCc_foodAggregateType<T extends Cc_foodAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_food]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_food[P]>
      : GetScalarType<T[P], AggregateCc_food[P]>
  }




  export type cc_foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_foodWhereInput
    orderBy?: cc_foodOrderByWithAggregationInput | cc_foodOrderByWithAggregationInput[]
    by: Cc_foodScalarFieldEnum[] | Cc_foodScalarFieldEnum
    having?: cc_foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_foodCountAggregateInputType | true
    _avg?: Cc_foodAvgAggregateInputType
    _sum?: Cc_foodSumAggregateInputType
    _min?: Cc_foodMinAggregateInputType
    _max?: Cc_foodMaxAggregateInputType
  }

  export type Cc_foodGroupByOutputType = {
    food_id: number
    food_name: string
    food_description: string | null
    _count: Cc_foodCountAggregateOutputType | null
    _avg: Cc_foodAvgAggregateOutputType | null
    _sum: Cc_foodSumAggregateOutputType | null
    _min: Cc_foodMinAggregateOutputType | null
    _max: Cc_foodMaxAggregateOutputType | null
  }

  type GetCc_foodGroupByPayload<T extends cc_foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_foodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_foodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_foodGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_foodGroupByOutputType[P]>
        }
      >
    >


  export type cc_foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    food_name?: boolean
    food_description?: boolean
    cc_food_nutrient?: boolean | cc_food$cc_food_nutrientArgs<ExtArgs>
    _count?: boolean | Cc_foodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_food"]>

  export type cc_foodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    food_name?: boolean
    food_description?: boolean
  }, ExtArgs["result"]["cc_food"]>

  export type cc_foodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    food_name?: boolean
    food_description?: boolean
  }, ExtArgs["result"]["cc_food"]>

  export type cc_foodSelectScalar = {
    food_id?: boolean
    food_name?: boolean
    food_description?: boolean
  }

  export type cc_foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_id" | "food_name" | "food_description", ExtArgs["result"]["cc_food"]>
  export type cc_foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food_nutrient?: boolean | cc_food$cc_food_nutrientArgs<ExtArgs>
    _count?: boolean | Cc_foodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cc_foodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cc_foodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cc_foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_food"
    objects: {
      cc_food_nutrient: Prisma.$cc_food_nutrientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      food_id: number
      food_name: string
      food_description: string | null
    }, ExtArgs["result"]["cc_food"]>
    composites: {}
  }

  type cc_foodGetPayload<S extends boolean | null | undefined | cc_foodDefaultArgs> = $Result.GetResult<Prisma.$cc_foodPayload, S>

  type cc_foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_foodCountAggregateInputType | true
    }

  export interface cc_foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_food'], meta: { name: 'cc_food' } }
    /**
     * Find zero or one Cc_food that matches the filter.
     * @param {cc_foodFindUniqueArgs} args - Arguments to find a Cc_food
     * @example
     * // Get one Cc_food
     * const cc_food = await prisma.cc_food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_foodFindUniqueArgs>(args: SelectSubset<T, cc_foodFindUniqueArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_foodFindUniqueOrThrowArgs} args - Arguments to find a Cc_food
     * @example
     * // Get one Cc_food
     * const cc_food = await prisma.cc_food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_foodFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodFindFirstArgs} args - Arguments to find a Cc_food
     * @example
     * // Get one Cc_food
     * const cc_food = await prisma.cc_food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_foodFindFirstArgs>(args?: SelectSubset<T, cc_foodFindFirstArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodFindFirstOrThrowArgs} args - Arguments to find a Cc_food
     * @example
     * // Get one Cc_food
     * const cc_food = await prisma.cc_food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_foodFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_foods
     * const cc_foods = await prisma.cc_food.findMany()
     * 
     * // Get first 10 Cc_foods
     * const cc_foods = await prisma.cc_food.findMany({ take: 10 })
     * 
     * // Only select the `food_id`
     * const cc_foodWithFood_idOnly = await prisma.cc_food.findMany({ select: { food_id: true } })
     * 
     */
    findMany<T extends cc_foodFindManyArgs>(args?: SelectSubset<T, cc_foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_food.
     * @param {cc_foodCreateArgs} args - Arguments to create a Cc_food.
     * @example
     * // Create one Cc_food
     * const Cc_food = await prisma.cc_food.create({
     *   data: {
     *     // ... data to create a Cc_food
     *   }
     * })
     * 
     */
    create<T extends cc_foodCreateArgs>(args: SelectSubset<T, cc_foodCreateArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_foods.
     * @param {cc_foodCreateManyArgs} args - Arguments to create many Cc_foods.
     * @example
     * // Create many Cc_foods
     * const cc_food = await prisma.cc_food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_foodCreateManyArgs>(args?: SelectSubset<T, cc_foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_foods and returns the data saved in the database.
     * @param {cc_foodCreateManyAndReturnArgs} args - Arguments to create many Cc_foods.
     * @example
     * // Create many Cc_foods
     * const cc_food = await prisma.cc_food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_foods and only return the `food_id`
     * const cc_foodWithFood_idOnly = await prisma.cc_food.createManyAndReturn({
     *   select: { food_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_foodCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_foodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_food.
     * @param {cc_foodDeleteArgs} args - Arguments to delete one Cc_food.
     * @example
     * // Delete one Cc_food
     * const Cc_food = await prisma.cc_food.delete({
     *   where: {
     *     // ... filter to delete one Cc_food
     *   }
     * })
     * 
     */
    delete<T extends cc_foodDeleteArgs>(args: SelectSubset<T, cc_foodDeleteArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_food.
     * @param {cc_foodUpdateArgs} args - Arguments to update one Cc_food.
     * @example
     * // Update one Cc_food
     * const cc_food = await prisma.cc_food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_foodUpdateArgs>(args: SelectSubset<T, cc_foodUpdateArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_foods.
     * @param {cc_foodDeleteManyArgs} args - Arguments to filter Cc_foods to delete.
     * @example
     * // Delete a few Cc_foods
     * const { count } = await prisma.cc_food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_foodDeleteManyArgs>(args?: SelectSubset<T, cc_foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_foods
     * const cc_food = await prisma.cc_food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_foodUpdateManyArgs>(args: SelectSubset<T, cc_foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_foods and returns the data updated in the database.
     * @param {cc_foodUpdateManyAndReturnArgs} args - Arguments to update many Cc_foods.
     * @example
     * // Update many Cc_foods
     * const cc_food = await prisma.cc_food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_foods and only return the `food_id`
     * const cc_foodWithFood_idOnly = await prisma.cc_food.updateManyAndReturn({
     *   select: { food_id: true },
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
    updateManyAndReturn<T extends cc_foodUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_foodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_food.
     * @param {cc_foodUpsertArgs} args - Arguments to update or create a Cc_food.
     * @example
     * // Update or create a Cc_food
     * const cc_food = await prisma.cc_food.upsert({
     *   create: {
     *     // ... data to create a Cc_food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_food we want to update
     *   }
     * })
     */
    upsert<T extends cc_foodUpsertArgs>(args: SelectSubset<T, cc_foodUpsertArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodCountArgs} args - Arguments to filter Cc_foods to count.
     * @example
     * // Count the number of Cc_foods
     * const count = await prisma.cc_food.count({
     *   where: {
     *     // ... the filter for the Cc_foods we want to count
     *   }
     * })
    **/
    count<T extends cc_foodCountArgs>(
      args?: Subset<T, cc_foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_foodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_foodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_foodAggregateArgs>(args: Subset<T, Cc_foodAggregateArgs>): Prisma.PrismaPromise<GetCc_foodAggregateType<T>>

    /**
     * Group by Cc_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_foodGroupByArgs} args - Group by arguments.
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
      T extends cc_foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_foodGroupByArgs['orderBy'] }
        : { orderBy?: cc_foodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_foodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_food model
   */
  readonly fields: cc_foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_food_nutrient<T extends cc_food$cc_food_nutrientArgs<ExtArgs> = {}>(args?: Subset<T, cc_food$cc_food_nutrientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cc_food model
   */
  interface cc_foodFieldRefs {
    readonly food_id: FieldRef<"cc_food", 'Int'>
    readonly food_name: FieldRef<"cc_food", 'String'>
    readonly food_description: FieldRef<"cc_food", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cc_food findUnique
   */
  export type cc_foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter, which cc_food to fetch.
     */
    where: cc_foodWhereUniqueInput
  }

  /**
   * cc_food findUniqueOrThrow
   */
  export type cc_foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter, which cc_food to fetch.
     */
    where: cc_foodWhereUniqueInput
  }

  /**
   * cc_food findFirst
   */
  export type cc_foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter, which cc_food to fetch.
     */
    where?: cc_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_foods to fetch.
     */
    orderBy?: cc_foodOrderByWithRelationInput | cc_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_foods.
     */
    cursor?: cc_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_foods.
     */
    distinct?: Cc_foodScalarFieldEnum | Cc_foodScalarFieldEnum[]
  }

  /**
   * cc_food findFirstOrThrow
   */
  export type cc_foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter, which cc_food to fetch.
     */
    where?: cc_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_foods to fetch.
     */
    orderBy?: cc_foodOrderByWithRelationInput | cc_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_foods.
     */
    cursor?: cc_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_foods.
     */
    distinct?: Cc_foodScalarFieldEnum | Cc_foodScalarFieldEnum[]
  }

  /**
   * cc_food findMany
   */
  export type cc_foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter, which cc_foods to fetch.
     */
    where?: cc_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_foods to fetch.
     */
    orderBy?: cc_foodOrderByWithRelationInput | cc_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_foods.
     */
    cursor?: cc_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_foods.
     */
    skip?: number
    distinct?: Cc_foodScalarFieldEnum | Cc_foodScalarFieldEnum[]
  }

  /**
   * cc_food create
   */
  export type cc_foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_food.
     */
    data: XOR<cc_foodCreateInput, cc_foodUncheckedCreateInput>
  }

  /**
   * cc_food createMany
   */
  export type cc_foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_foods.
     */
    data: cc_foodCreateManyInput | cc_foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_food createManyAndReturn
   */
  export type cc_foodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * The data used to create many cc_foods.
     */
    data: cc_foodCreateManyInput | cc_foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_food update
   */
  export type cc_foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_food.
     */
    data: XOR<cc_foodUpdateInput, cc_foodUncheckedUpdateInput>
    /**
     * Choose, which cc_food to update.
     */
    where: cc_foodWhereUniqueInput
  }

  /**
   * cc_food updateMany
   */
  export type cc_foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_foods.
     */
    data: XOR<cc_foodUpdateManyMutationInput, cc_foodUncheckedUpdateManyInput>
    /**
     * Filter which cc_foods to update
     */
    where?: cc_foodWhereInput
    /**
     * Limit how many cc_foods to update.
     */
    limit?: number
  }

  /**
   * cc_food updateManyAndReturn
   */
  export type cc_foodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * The data used to update cc_foods.
     */
    data: XOR<cc_foodUpdateManyMutationInput, cc_foodUncheckedUpdateManyInput>
    /**
     * Filter which cc_foods to update
     */
    where?: cc_foodWhereInput
    /**
     * Limit how many cc_foods to update.
     */
    limit?: number
  }

  /**
   * cc_food upsert
   */
  export type cc_foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_food to update in case it exists.
     */
    where: cc_foodWhereUniqueInput
    /**
     * In case the cc_food found by the `where` argument doesn't exist, create a new cc_food with this data.
     */
    create: XOR<cc_foodCreateInput, cc_foodUncheckedCreateInput>
    /**
     * In case the cc_food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_foodUpdateInput, cc_foodUncheckedUpdateInput>
  }

  /**
   * cc_food delete
   */
  export type cc_foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
    /**
     * Filter which cc_food to delete.
     */
    where: cc_foodWhereUniqueInput
  }

  /**
   * cc_food deleteMany
   */
  export type cc_foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_foods to delete
     */
    where?: cc_foodWhereInput
    /**
     * Limit how many cc_foods to delete.
     */
    limit?: number
  }

  /**
   * cc_food.cc_food_nutrient
   */
  export type cc_food$cc_food_nutrientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    where?: cc_food_nutrientWhereInput
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    cursor?: cc_food_nutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cc_food_nutrientScalarFieldEnum | Cc_food_nutrientScalarFieldEnum[]
  }

  /**
   * cc_food without action
   */
  export type cc_foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food
     */
    select?: cc_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food
     */
    omit?: cc_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_foodInclude<ExtArgs> | null
  }


  /**
   * Model cc_food_nutrient
   */

  export type AggregateCc_food_nutrient = {
    _count: Cc_food_nutrientCountAggregateOutputType | null
    _avg: Cc_food_nutrientAvgAggregateOutputType | null
    _sum: Cc_food_nutrientSumAggregateOutputType | null
    _min: Cc_food_nutrientMinAggregateOutputType | null
    _max: Cc_food_nutrientMaxAggregateOutputType | null
  }

  export type Cc_food_nutrientAvgAggregateOutputType = {
    food_id: number | null
    nutrient_id: number | null
  }

  export type Cc_food_nutrientSumAggregateOutputType = {
    food_id: number | null
    nutrient_id: number | null
  }

  export type Cc_food_nutrientMinAggregateOutputType = {
    food_id: number | null
    nutrient_id: number | null
  }

  export type Cc_food_nutrientMaxAggregateOutputType = {
    food_id: number | null
    nutrient_id: number | null
  }

  export type Cc_food_nutrientCountAggregateOutputType = {
    food_id: number
    nutrient_id: number
    _all: number
  }


  export type Cc_food_nutrientAvgAggregateInputType = {
    food_id?: true
    nutrient_id?: true
  }

  export type Cc_food_nutrientSumAggregateInputType = {
    food_id?: true
    nutrient_id?: true
  }

  export type Cc_food_nutrientMinAggregateInputType = {
    food_id?: true
    nutrient_id?: true
  }

  export type Cc_food_nutrientMaxAggregateInputType = {
    food_id?: true
    nutrient_id?: true
  }

  export type Cc_food_nutrientCountAggregateInputType = {
    food_id?: true
    nutrient_id?: true
    _all?: true
  }

  export type Cc_food_nutrientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_food_nutrient to aggregate.
     */
    where?: cc_food_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_food_nutrients to fetch.
     */
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_food_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_food_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_food_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_food_nutrients
    **/
    _count?: true | Cc_food_nutrientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_food_nutrientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_food_nutrientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_food_nutrientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_food_nutrientMaxAggregateInputType
  }

  export type GetCc_food_nutrientAggregateType<T extends Cc_food_nutrientAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_food_nutrient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_food_nutrient[P]>
      : GetScalarType<T[P], AggregateCc_food_nutrient[P]>
  }




  export type cc_food_nutrientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_food_nutrientWhereInput
    orderBy?: cc_food_nutrientOrderByWithAggregationInput | cc_food_nutrientOrderByWithAggregationInput[]
    by: Cc_food_nutrientScalarFieldEnum[] | Cc_food_nutrientScalarFieldEnum
    having?: cc_food_nutrientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_food_nutrientCountAggregateInputType | true
    _avg?: Cc_food_nutrientAvgAggregateInputType
    _sum?: Cc_food_nutrientSumAggregateInputType
    _min?: Cc_food_nutrientMinAggregateInputType
    _max?: Cc_food_nutrientMaxAggregateInputType
  }

  export type Cc_food_nutrientGroupByOutputType = {
    food_id: number
    nutrient_id: number
    _count: Cc_food_nutrientCountAggregateOutputType | null
    _avg: Cc_food_nutrientAvgAggregateOutputType | null
    _sum: Cc_food_nutrientSumAggregateOutputType | null
    _min: Cc_food_nutrientMinAggregateOutputType | null
    _max: Cc_food_nutrientMaxAggregateOutputType | null
  }

  type GetCc_food_nutrientGroupByPayload<T extends cc_food_nutrientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_food_nutrientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_food_nutrientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_food_nutrientGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_food_nutrientGroupByOutputType[P]>
        }
      >
    >


  export type cc_food_nutrientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    nutrient_id?: boolean
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_food_nutrient"]>

  export type cc_food_nutrientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    nutrient_id?: boolean
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_food_nutrient"]>

  export type cc_food_nutrientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    nutrient_id?: boolean
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_food_nutrient"]>

  export type cc_food_nutrientSelectScalar = {
    food_id?: boolean
    nutrient_id?: boolean
  }

  export type cc_food_nutrientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_id" | "nutrient_id", ExtArgs["result"]["cc_food_nutrient"]>
  export type cc_food_nutrientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }
  export type cc_food_nutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }
  export type cc_food_nutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food?: boolean | cc_foodDefaultArgs<ExtArgs>
    cc_nutrient?: boolean | cc_nutrientDefaultArgs<ExtArgs>
  }

  export type $cc_food_nutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_food_nutrient"
    objects: {
      cc_food: Prisma.$cc_foodPayload<ExtArgs>
      cc_nutrient: Prisma.$cc_nutrientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      food_id: number
      nutrient_id: number
    }, ExtArgs["result"]["cc_food_nutrient"]>
    composites: {}
  }

  type cc_food_nutrientGetPayload<S extends boolean | null | undefined | cc_food_nutrientDefaultArgs> = $Result.GetResult<Prisma.$cc_food_nutrientPayload, S>

  type cc_food_nutrientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_food_nutrientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_food_nutrientCountAggregateInputType | true
    }

  export interface cc_food_nutrientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_food_nutrient'], meta: { name: 'cc_food_nutrient' } }
    /**
     * Find zero or one Cc_food_nutrient that matches the filter.
     * @param {cc_food_nutrientFindUniqueArgs} args - Arguments to find a Cc_food_nutrient
     * @example
     * // Get one Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_food_nutrientFindUniqueArgs>(args: SelectSubset<T, cc_food_nutrientFindUniqueArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_food_nutrient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_food_nutrientFindUniqueOrThrowArgs} args - Arguments to find a Cc_food_nutrient
     * @example
     * // Get one Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_food_nutrientFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_food_nutrientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_food_nutrient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientFindFirstArgs} args - Arguments to find a Cc_food_nutrient
     * @example
     * // Get one Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_food_nutrientFindFirstArgs>(args?: SelectSubset<T, cc_food_nutrientFindFirstArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_food_nutrient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientFindFirstOrThrowArgs} args - Arguments to find a Cc_food_nutrient
     * @example
     * // Get one Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_food_nutrientFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_food_nutrientFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_food_nutrients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_food_nutrients
     * const cc_food_nutrients = await prisma.cc_food_nutrient.findMany()
     * 
     * // Get first 10 Cc_food_nutrients
     * const cc_food_nutrients = await prisma.cc_food_nutrient.findMany({ take: 10 })
     * 
     * // Only select the `food_id`
     * const cc_food_nutrientWithFood_idOnly = await prisma.cc_food_nutrient.findMany({ select: { food_id: true } })
     * 
     */
    findMany<T extends cc_food_nutrientFindManyArgs>(args?: SelectSubset<T, cc_food_nutrientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_food_nutrient.
     * @param {cc_food_nutrientCreateArgs} args - Arguments to create a Cc_food_nutrient.
     * @example
     * // Create one Cc_food_nutrient
     * const Cc_food_nutrient = await prisma.cc_food_nutrient.create({
     *   data: {
     *     // ... data to create a Cc_food_nutrient
     *   }
     * })
     * 
     */
    create<T extends cc_food_nutrientCreateArgs>(args: SelectSubset<T, cc_food_nutrientCreateArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_food_nutrients.
     * @param {cc_food_nutrientCreateManyArgs} args - Arguments to create many Cc_food_nutrients.
     * @example
     * // Create many Cc_food_nutrients
     * const cc_food_nutrient = await prisma.cc_food_nutrient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_food_nutrientCreateManyArgs>(args?: SelectSubset<T, cc_food_nutrientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_food_nutrients and returns the data saved in the database.
     * @param {cc_food_nutrientCreateManyAndReturnArgs} args - Arguments to create many Cc_food_nutrients.
     * @example
     * // Create many Cc_food_nutrients
     * const cc_food_nutrient = await prisma.cc_food_nutrient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_food_nutrients and only return the `food_id`
     * const cc_food_nutrientWithFood_idOnly = await prisma.cc_food_nutrient.createManyAndReturn({
     *   select: { food_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_food_nutrientCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_food_nutrientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_food_nutrient.
     * @param {cc_food_nutrientDeleteArgs} args - Arguments to delete one Cc_food_nutrient.
     * @example
     * // Delete one Cc_food_nutrient
     * const Cc_food_nutrient = await prisma.cc_food_nutrient.delete({
     *   where: {
     *     // ... filter to delete one Cc_food_nutrient
     *   }
     * })
     * 
     */
    delete<T extends cc_food_nutrientDeleteArgs>(args: SelectSubset<T, cc_food_nutrientDeleteArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_food_nutrient.
     * @param {cc_food_nutrientUpdateArgs} args - Arguments to update one Cc_food_nutrient.
     * @example
     * // Update one Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_food_nutrientUpdateArgs>(args: SelectSubset<T, cc_food_nutrientUpdateArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_food_nutrients.
     * @param {cc_food_nutrientDeleteManyArgs} args - Arguments to filter Cc_food_nutrients to delete.
     * @example
     * // Delete a few Cc_food_nutrients
     * const { count } = await prisma.cc_food_nutrient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_food_nutrientDeleteManyArgs>(args?: SelectSubset<T, cc_food_nutrientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_food_nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_food_nutrients
     * const cc_food_nutrient = await prisma.cc_food_nutrient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_food_nutrientUpdateManyArgs>(args: SelectSubset<T, cc_food_nutrientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_food_nutrients and returns the data updated in the database.
     * @param {cc_food_nutrientUpdateManyAndReturnArgs} args - Arguments to update many Cc_food_nutrients.
     * @example
     * // Update many Cc_food_nutrients
     * const cc_food_nutrient = await prisma.cc_food_nutrient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_food_nutrients and only return the `food_id`
     * const cc_food_nutrientWithFood_idOnly = await prisma.cc_food_nutrient.updateManyAndReturn({
     *   select: { food_id: true },
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
    updateManyAndReturn<T extends cc_food_nutrientUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_food_nutrientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_food_nutrient.
     * @param {cc_food_nutrientUpsertArgs} args - Arguments to update or create a Cc_food_nutrient.
     * @example
     * // Update or create a Cc_food_nutrient
     * const cc_food_nutrient = await prisma.cc_food_nutrient.upsert({
     *   create: {
     *     // ... data to create a Cc_food_nutrient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_food_nutrient we want to update
     *   }
     * })
     */
    upsert<T extends cc_food_nutrientUpsertArgs>(args: SelectSubset<T, cc_food_nutrientUpsertArgs<ExtArgs>>): Prisma__cc_food_nutrientClient<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_food_nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientCountArgs} args - Arguments to filter Cc_food_nutrients to count.
     * @example
     * // Count the number of Cc_food_nutrients
     * const count = await prisma.cc_food_nutrient.count({
     *   where: {
     *     // ... the filter for the Cc_food_nutrients we want to count
     *   }
     * })
    **/
    count<T extends cc_food_nutrientCountArgs>(
      args?: Subset<T, cc_food_nutrientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_food_nutrientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_food_nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_food_nutrientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_food_nutrientAggregateArgs>(args: Subset<T, Cc_food_nutrientAggregateArgs>): Prisma.PrismaPromise<GetCc_food_nutrientAggregateType<T>>

    /**
     * Group by Cc_food_nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_food_nutrientGroupByArgs} args - Group by arguments.
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
      T extends cc_food_nutrientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_food_nutrientGroupByArgs['orderBy'] }
        : { orderBy?: cc_food_nutrientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_food_nutrientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_food_nutrientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_food_nutrient model
   */
  readonly fields: cc_food_nutrientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_food_nutrient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_food_nutrientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_food<T extends cc_foodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cc_foodDefaultArgs<ExtArgs>>): Prisma__cc_foodClient<$Result.GetResult<Prisma.$cc_foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cc_nutrient<T extends cc_nutrientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cc_nutrientDefaultArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cc_food_nutrient model
   */
  interface cc_food_nutrientFieldRefs {
    readonly food_id: FieldRef<"cc_food_nutrient", 'Int'>
    readonly nutrient_id: FieldRef<"cc_food_nutrient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cc_food_nutrient findUnique
   */
  export type cc_food_nutrientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_food_nutrient to fetch.
     */
    where: cc_food_nutrientWhereUniqueInput
  }

  /**
   * cc_food_nutrient findUniqueOrThrow
   */
  export type cc_food_nutrientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_food_nutrient to fetch.
     */
    where: cc_food_nutrientWhereUniqueInput
  }

  /**
   * cc_food_nutrient findFirst
   */
  export type cc_food_nutrientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_food_nutrient to fetch.
     */
    where?: cc_food_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_food_nutrients to fetch.
     */
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_food_nutrients.
     */
    cursor?: cc_food_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_food_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_food_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_food_nutrients.
     */
    distinct?: Cc_food_nutrientScalarFieldEnum | Cc_food_nutrientScalarFieldEnum[]
  }

  /**
   * cc_food_nutrient findFirstOrThrow
   */
  export type cc_food_nutrientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_food_nutrient to fetch.
     */
    where?: cc_food_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_food_nutrients to fetch.
     */
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_food_nutrients.
     */
    cursor?: cc_food_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_food_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_food_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_food_nutrients.
     */
    distinct?: Cc_food_nutrientScalarFieldEnum | Cc_food_nutrientScalarFieldEnum[]
  }

  /**
   * cc_food_nutrient findMany
   */
  export type cc_food_nutrientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_food_nutrients to fetch.
     */
    where?: cc_food_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_food_nutrients to fetch.
     */
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_food_nutrients.
     */
    cursor?: cc_food_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_food_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_food_nutrients.
     */
    skip?: number
    distinct?: Cc_food_nutrientScalarFieldEnum | Cc_food_nutrientScalarFieldEnum[]
  }

  /**
   * cc_food_nutrient create
   */
  export type cc_food_nutrientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_food_nutrient.
     */
    data: XOR<cc_food_nutrientCreateInput, cc_food_nutrientUncheckedCreateInput>
  }

  /**
   * cc_food_nutrient createMany
   */
  export type cc_food_nutrientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_food_nutrients.
     */
    data: cc_food_nutrientCreateManyInput | cc_food_nutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_food_nutrient createManyAndReturn
   */
  export type cc_food_nutrientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * The data used to create many cc_food_nutrients.
     */
    data: cc_food_nutrientCreateManyInput | cc_food_nutrientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cc_food_nutrient update
   */
  export type cc_food_nutrientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_food_nutrient.
     */
    data: XOR<cc_food_nutrientUpdateInput, cc_food_nutrientUncheckedUpdateInput>
    /**
     * Choose, which cc_food_nutrient to update.
     */
    where: cc_food_nutrientWhereUniqueInput
  }

  /**
   * cc_food_nutrient updateMany
   */
  export type cc_food_nutrientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_food_nutrients.
     */
    data: XOR<cc_food_nutrientUpdateManyMutationInput, cc_food_nutrientUncheckedUpdateManyInput>
    /**
     * Filter which cc_food_nutrients to update
     */
    where?: cc_food_nutrientWhereInput
    /**
     * Limit how many cc_food_nutrients to update.
     */
    limit?: number
  }

  /**
   * cc_food_nutrient updateManyAndReturn
   */
  export type cc_food_nutrientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * The data used to update cc_food_nutrients.
     */
    data: XOR<cc_food_nutrientUpdateManyMutationInput, cc_food_nutrientUncheckedUpdateManyInput>
    /**
     * Filter which cc_food_nutrients to update
     */
    where?: cc_food_nutrientWhereInput
    /**
     * Limit how many cc_food_nutrients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cc_food_nutrient upsert
   */
  export type cc_food_nutrientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_food_nutrient to update in case it exists.
     */
    where: cc_food_nutrientWhereUniqueInput
    /**
     * In case the cc_food_nutrient found by the `where` argument doesn't exist, create a new cc_food_nutrient with this data.
     */
    create: XOR<cc_food_nutrientCreateInput, cc_food_nutrientUncheckedCreateInput>
    /**
     * In case the cc_food_nutrient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_food_nutrientUpdateInput, cc_food_nutrientUncheckedUpdateInput>
  }

  /**
   * cc_food_nutrient delete
   */
  export type cc_food_nutrientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    /**
     * Filter which cc_food_nutrient to delete.
     */
    where: cc_food_nutrientWhereUniqueInput
  }

  /**
   * cc_food_nutrient deleteMany
   */
  export type cc_food_nutrientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_food_nutrients to delete
     */
    where?: cc_food_nutrientWhereInput
    /**
     * Limit how many cc_food_nutrients to delete.
     */
    limit?: number
  }

  /**
   * cc_food_nutrient without action
   */
  export type cc_food_nutrientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
  }


  /**
   * Model cc_illness
   */

  export type AggregateCc_illness = {
    _count: Cc_illnessCountAggregateOutputType | null
    _avg: Cc_illnessAvgAggregateOutputType | null
    _sum: Cc_illnessSumAggregateOutputType | null
    _min: Cc_illnessMinAggregateOutputType | null
    _max: Cc_illnessMaxAggregateOutputType | null
  }

  export type Cc_illnessAvgAggregateOutputType = {
    illness_id: number | null
  }

  export type Cc_illnessSumAggregateOutputType = {
    illness_id: number | null
  }

  export type Cc_illnessMinAggregateOutputType = {
    illness_id: number | null
    illness_name: string | null
    illness_description: string | null
  }

  export type Cc_illnessMaxAggregateOutputType = {
    illness_id: number | null
    illness_name: string | null
    illness_description: string | null
  }

  export type Cc_illnessCountAggregateOutputType = {
    illness_id: number
    illness_name: number
    illness_description: number
    _all: number
  }


  export type Cc_illnessAvgAggregateInputType = {
    illness_id?: true
  }

  export type Cc_illnessSumAggregateInputType = {
    illness_id?: true
  }

  export type Cc_illnessMinAggregateInputType = {
    illness_id?: true
    illness_name?: true
    illness_description?: true
  }

  export type Cc_illnessMaxAggregateInputType = {
    illness_id?: true
    illness_name?: true
    illness_description?: true
  }

  export type Cc_illnessCountAggregateInputType = {
    illness_id?: true
    illness_name?: true
    illness_description?: true
    _all?: true
  }

  export type Cc_illnessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_illness to aggregate.
     */
    where?: cc_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_illnesses to fetch.
     */
    orderBy?: cc_illnessOrderByWithRelationInput | cc_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_illnesses
    **/
    _count?: true | Cc_illnessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_illnessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_illnessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_illnessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_illnessMaxAggregateInputType
  }

  export type GetCc_illnessAggregateType<T extends Cc_illnessAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_illness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_illness[P]>
      : GetScalarType<T[P], AggregateCc_illness[P]>
  }




  export type cc_illnessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_illnessWhereInput
    orderBy?: cc_illnessOrderByWithAggregationInput | cc_illnessOrderByWithAggregationInput[]
    by: Cc_illnessScalarFieldEnum[] | Cc_illnessScalarFieldEnum
    having?: cc_illnessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_illnessCountAggregateInputType | true
    _avg?: Cc_illnessAvgAggregateInputType
    _sum?: Cc_illnessSumAggregateInputType
    _min?: Cc_illnessMinAggregateInputType
    _max?: Cc_illnessMaxAggregateInputType
  }

  export type Cc_illnessGroupByOutputType = {
    illness_id: number
    illness_name: string
    illness_description: string | null
    _count: Cc_illnessCountAggregateOutputType | null
    _avg: Cc_illnessAvgAggregateOutputType | null
    _sum: Cc_illnessSumAggregateOutputType | null
    _min: Cc_illnessMinAggregateOutputType | null
    _max: Cc_illnessMaxAggregateOutputType | null
  }

  type GetCc_illnessGroupByPayload<T extends cc_illnessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_illnessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_illnessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_illnessGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_illnessGroupByOutputType[P]>
        }
      >
    >


  export type cc_illnessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    illness_id?: boolean
    illness_name?: boolean
    illness_description?: boolean
    cc_user_illness?: boolean | cc_illness$cc_user_illnessArgs<ExtArgs>
    _count?: boolean | Cc_illnessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_illness"]>

  export type cc_illnessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    illness_id?: boolean
    illness_name?: boolean
    illness_description?: boolean
  }, ExtArgs["result"]["cc_illness"]>

  export type cc_illnessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    illness_id?: boolean
    illness_name?: boolean
    illness_description?: boolean
  }, ExtArgs["result"]["cc_illness"]>

  export type cc_illnessSelectScalar = {
    illness_id?: boolean
    illness_name?: boolean
    illness_description?: boolean
  }

  export type cc_illnessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"illness_id" | "illness_name" | "illness_description", ExtArgs["result"]["cc_illness"]>
  export type cc_illnessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_user_illness?: boolean | cc_illness$cc_user_illnessArgs<ExtArgs>
    _count?: boolean | Cc_illnessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cc_illnessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cc_illnessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cc_illnessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_illness"
    objects: {
      cc_user_illness: Prisma.$cc_user_illnessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      illness_id: number
      illness_name: string
      illness_description: string | null
    }, ExtArgs["result"]["cc_illness"]>
    composites: {}
  }

  type cc_illnessGetPayload<S extends boolean | null | undefined | cc_illnessDefaultArgs> = $Result.GetResult<Prisma.$cc_illnessPayload, S>

  type cc_illnessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_illnessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_illnessCountAggregateInputType | true
    }

  export interface cc_illnessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_illness'], meta: { name: 'cc_illness' } }
    /**
     * Find zero or one Cc_illness that matches the filter.
     * @param {cc_illnessFindUniqueArgs} args - Arguments to find a Cc_illness
     * @example
     * // Get one Cc_illness
     * const cc_illness = await prisma.cc_illness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_illnessFindUniqueArgs>(args: SelectSubset<T, cc_illnessFindUniqueArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_illness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_illnessFindUniqueOrThrowArgs} args - Arguments to find a Cc_illness
     * @example
     * // Get one Cc_illness
     * const cc_illness = await prisma.cc_illness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_illnessFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_illnessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_illness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessFindFirstArgs} args - Arguments to find a Cc_illness
     * @example
     * // Get one Cc_illness
     * const cc_illness = await prisma.cc_illness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_illnessFindFirstArgs>(args?: SelectSubset<T, cc_illnessFindFirstArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_illness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessFindFirstOrThrowArgs} args - Arguments to find a Cc_illness
     * @example
     * // Get one Cc_illness
     * const cc_illness = await prisma.cc_illness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_illnessFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_illnessFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_illnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_illnesses
     * const cc_illnesses = await prisma.cc_illness.findMany()
     * 
     * // Get first 10 Cc_illnesses
     * const cc_illnesses = await prisma.cc_illness.findMany({ take: 10 })
     * 
     * // Only select the `illness_id`
     * const cc_illnessWithIllness_idOnly = await prisma.cc_illness.findMany({ select: { illness_id: true } })
     * 
     */
    findMany<T extends cc_illnessFindManyArgs>(args?: SelectSubset<T, cc_illnessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_illness.
     * @param {cc_illnessCreateArgs} args - Arguments to create a Cc_illness.
     * @example
     * // Create one Cc_illness
     * const Cc_illness = await prisma.cc_illness.create({
     *   data: {
     *     // ... data to create a Cc_illness
     *   }
     * })
     * 
     */
    create<T extends cc_illnessCreateArgs>(args: SelectSubset<T, cc_illnessCreateArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_illnesses.
     * @param {cc_illnessCreateManyArgs} args - Arguments to create many Cc_illnesses.
     * @example
     * // Create many Cc_illnesses
     * const cc_illness = await prisma.cc_illness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_illnessCreateManyArgs>(args?: SelectSubset<T, cc_illnessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_illnesses and returns the data saved in the database.
     * @param {cc_illnessCreateManyAndReturnArgs} args - Arguments to create many Cc_illnesses.
     * @example
     * // Create many Cc_illnesses
     * const cc_illness = await prisma.cc_illness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_illnesses and only return the `illness_id`
     * const cc_illnessWithIllness_idOnly = await prisma.cc_illness.createManyAndReturn({
     *   select: { illness_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_illnessCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_illnessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_illness.
     * @param {cc_illnessDeleteArgs} args - Arguments to delete one Cc_illness.
     * @example
     * // Delete one Cc_illness
     * const Cc_illness = await prisma.cc_illness.delete({
     *   where: {
     *     // ... filter to delete one Cc_illness
     *   }
     * })
     * 
     */
    delete<T extends cc_illnessDeleteArgs>(args: SelectSubset<T, cc_illnessDeleteArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_illness.
     * @param {cc_illnessUpdateArgs} args - Arguments to update one Cc_illness.
     * @example
     * // Update one Cc_illness
     * const cc_illness = await prisma.cc_illness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_illnessUpdateArgs>(args: SelectSubset<T, cc_illnessUpdateArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_illnesses.
     * @param {cc_illnessDeleteManyArgs} args - Arguments to filter Cc_illnesses to delete.
     * @example
     * // Delete a few Cc_illnesses
     * const { count } = await prisma.cc_illness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_illnessDeleteManyArgs>(args?: SelectSubset<T, cc_illnessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_illnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_illnesses
     * const cc_illness = await prisma.cc_illness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_illnessUpdateManyArgs>(args: SelectSubset<T, cc_illnessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_illnesses and returns the data updated in the database.
     * @param {cc_illnessUpdateManyAndReturnArgs} args - Arguments to update many Cc_illnesses.
     * @example
     * // Update many Cc_illnesses
     * const cc_illness = await prisma.cc_illness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_illnesses and only return the `illness_id`
     * const cc_illnessWithIllness_idOnly = await prisma.cc_illness.updateManyAndReturn({
     *   select: { illness_id: true },
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
    updateManyAndReturn<T extends cc_illnessUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_illnessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_illness.
     * @param {cc_illnessUpsertArgs} args - Arguments to update or create a Cc_illness.
     * @example
     * // Update or create a Cc_illness
     * const cc_illness = await prisma.cc_illness.upsert({
     *   create: {
     *     // ... data to create a Cc_illness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_illness we want to update
     *   }
     * })
     */
    upsert<T extends cc_illnessUpsertArgs>(args: SelectSubset<T, cc_illnessUpsertArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_illnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessCountArgs} args - Arguments to filter Cc_illnesses to count.
     * @example
     * // Count the number of Cc_illnesses
     * const count = await prisma.cc_illness.count({
     *   where: {
     *     // ... the filter for the Cc_illnesses we want to count
     *   }
     * })
    **/
    count<T extends cc_illnessCountArgs>(
      args?: Subset<T, cc_illnessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_illnessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_illness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_illnessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_illnessAggregateArgs>(args: Subset<T, Cc_illnessAggregateArgs>): Prisma.PrismaPromise<GetCc_illnessAggregateType<T>>

    /**
     * Group by Cc_illness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_illnessGroupByArgs} args - Group by arguments.
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
      T extends cc_illnessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_illnessGroupByArgs['orderBy'] }
        : { orderBy?: cc_illnessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_illnessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_illnessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_illness model
   */
  readonly fields: cc_illnessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_illness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_illnessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_user_illness<T extends cc_illness$cc_user_illnessArgs<ExtArgs> = {}>(args?: Subset<T, cc_illness$cc_user_illnessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cc_illness model
   */
  interface cc_illnessFieldRefs {
    readonly illness_id: FieldRef<"cc_illness", 'Int'>
    readonly illness_name: FieldRef<"cc_illness", 'String'>
    readonly illness_description: FieldRef<"cc_illness", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cc_illness findUnique
   */
  export type cc_illnessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_illness to fetch.
     */
    where: cc_illnessWhereUniqueInput
  }

  /**
   * cc_illness findUniqueOrThrow
   */
  export type cc_illnessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_illness to fetch.
     */
    where: cc_illnessWhereUniqueInput
  }

  /**
   * cc_illness findFirst
   */
  export type cc_illnessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_illness to fetch.
     */
    where?: cc_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_illnesses to fetch.
     */
    orderBy?: cc_illnessOrderByWithRelationInput | cc_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_illnesses.
     */
    cursor?: cc_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_illnesses.
     */
    distinct?: Cc_illnessScalarFieldEnum | Cc_illnessScalarFieldEnum[]
  }

  /**
   * cc_illness findFirstOrThrow
   */
  export type cc_illnessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_illness to fetch.
     */
    where?: cc_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_illnesses to fetch.
     */
    orderBy?: cc_illnessOrderByWithRelationInput | cc_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_illnesses.
     */
    cursor?: cc_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_illnesses.
     */
    distinct?: Cc_illnessScalarFieldEnum | Cc_illnessScalarFieldEnum[]
  }

  /**
   * cc_illness findMany
   */
  export type cc_illnessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_illnesses to fetch.
     */
    where?: cc_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_illnesses to fetch.
     */
    orderBy?: cc_illnessOrderByWithRelationInput | cc_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_illnesses.
     */
    cursor?: cc_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_illnesses.
     */
    skip?: number
    distinct?: Cc_illnessScalarFieldEnum | Cc_illnessScalarFieldEnum[]
  }

  /**
   * cc_illness create
   */
  export type cc_illnessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_illness.
     */
    data: XOR<cc_illnessCreateInput, cc_illnessUncheckedCreateInput>
  }

  /**
   * cc_illness createMany
   */
  export type cc_illnessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_illnesses.
     */
    data: cc_illnessCreateManyInput | cc_illnessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_illness createManyAndReturn
   */
  export type cc_illnessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * The data used to create many cc_illnesses.
     */
    data: cc_illnessCreateManyInput | cc_illnessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_illness update
   */
  export type cc_illnessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_illness.
     */
    data: XOR<cc_illnessUpdateInput, cc_illnessUncheckedUpdateInput>
    /**
     * Choose, which cc_illness to update.
     */
    where: cc_illnessWhereUniqueInput
  }

  /**
   * cc_illness updateMany
   */
  export type cc_illnessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_illnesses.
     */
    data: XOR<cc_illnessUpdateManyMutationInput, cc_illnessUncheckedUpdateManyInput>
    /**
     * Filter which cc_illnesses to update
     */
    where?: cc_illnessWhereInput
    /**
     * Limit how many cc_illnesses to update.
     */
    limit?: number
  }

  /**
   * cc_illness updateManyAndReturn
   */
  export type cc_illnessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * The data used to update cc_illnesses.
     */
    data: XOR<cc_illnessUpdateManyMutationInput, cc_illnessUncheckedUpdateManyInput>
    /**
     * Filter which cc_illnesses to update
     */
    where?: cc_illnessWhereInput
    /**
     * Limit how many cc_illnesses to update.
     */
    limit?: number
  }

  /**
   * cc_illness upsert
   */
  export type cc_illnessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_illness to update in case it exists.
     */
    where: cc_illnessWhereUniqueInput
    /**
     * In case the cc_illness found by the `where` argument doesn't exist, create a new cc_illness with this data.
     */
    create: XOR<cc_illnessCreateInput, cc_illnessUncheckedCreateInput>
    /**
     * In case the cc_illness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_illnessUpdateInput, cc_illnessUncheckedUpdateInput>
  }

  /**
   * cc_illness delete
   */
  export type cc_illnessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
    /**
     * Filter which cc_illness to delete.
     */
    where: cc_illnessWhereUniqueInput
  }

  /**
   * cc_illness deleteMany
   */
  export type cc_illnessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_illnesses to delete
     */
    where?: cc_illnessWhereInput
    /**
     * Limit how many cc_illnesses to delete.
     */
    limit?: number
  }

  /**
   * cc_illness.cc_user_illness
   */
  export type cc_illness$cc_user_illnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    where?: cc_user_illnessWhereInput
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    cursor?: cc_user_illnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cc_user_illnessScalarFieldEnum | Cc_user_illnessScalarFieldEnum[]
  }

  /**
   * cc_illness without action
   */
  export type cc_illnessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_illness
     */
    select?: cc_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_illness
     */
    omit?: cc_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_illnessInclude<ExtArgs> | null
  }


  /**
   * Model cc_nutrient
   */

  export type AggregateCc_nutrient = {
    _count: Cc_nutrientCountAggregateOutputType | null
    _avg: Cc_nutrientAvgAggregateOutputType | null
    _sum: Cc_nutrientSumAggregateOutputType | null
    _min: Cc_nutrientMinAggregateOutputType | null
    _max: Cc_nutrientMaxAggregateOutputType | null
  }

  export type Cc_nutrientAvgAggregateOutputType = {
    nutrient_id: number | null
  }

  export type Cc_nutrientSumAggregateOutputType = {
    nutrient_id: number | null
  }

  export type Cc_nutrientMinAggregateOutputType = {
    nutrient_id: number | null
    nutrient_name: string | null
    nutrient_description: string | null
  }

  export type Cc_nutrientMaxAggregateOutputType = {
    nutrient_id: number | null
    nutrient_name: string | null
    nutrient_description: string | null
  }

  export type Cc_nutrientCountAggregateOutputType = {
    nutrient_id: number
    nutrient_name: number
    nutrient_description: number
    _all: number
  }


  export type Cc_nutrientAvgAggregateInputType = {
    nutrient_id?: true
  }

  export type Cc_nutrientSumAggregateInputType = {
    nutrient_id?: true
  }

  export type Cc_nutrientMinAggregateInputType = {
    nutrient_id?: true
    nutrient_name?: true
    nutrient_description?: true
  }

  export type Cc_nutrientMaxAggregateInputType = {
    nutrient_id?: true
    nutrient_name?: true
    nutrient_description?: true
  }

  export type Cc_nutrientCountAggregateInputType = {
    nutrient_id?: true
    nutrient_name?: true
    nutrient_description?: true
    _all?: true
  }

  export type Cc_nutrientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_nutrient to aggregate.
     */
    where?: cc_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_nutrients to fetch.
     */
    orderBy?: cc_nutrientOrderByWithRelationInput | cc_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_nutrients
    **/
    _count?: true | Cc_nutrientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_nutrientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_nutrientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_nutrientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_nutrientMaxAggregateInputType
  }

  export type GetCc_nutrientAggregateType<T extends Cc_nutrientAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_nutrient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_nutrient[P]>
      : GetScalarType<T[P], AggregateCc_nutrient[P]>
  }




  export type cc_nutrientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_nutrientWhereInput
    orderBy?: cc_nutrientOrderByWithAggregationInput | cc_nutrientOrderByWithAggregationInput[]
    by: Cc_nutrientScalarFieldEnum[] | Cc_nutrientScalarFieldEnum
    having?: cc_nutrientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_nutrientCountAggregateInputType | true
    _avg?: Cc_nutrientAvgAggregateInputType
    _sum?: Cc_nutrientSumAggregateInputType
    _min?: Cc_nutrientMinAggregateInputType
    _max?: Cc_nutrientMaxAggregateInputType
  }

  export type Cc_nutrientGroupByOutputType = {
    nutrient_id: number
    nutrient_name: string
    nutrient_description: string | null
    _count: Cc_nutrientCountAggregateOutputType | null
    _avg: Cc_nutrientAvgAggregateOutputType | null
    _sum: Cc_nutrientSumAggregateOutputType | null
    _min: Cc_nutrientMinAggregateOutputType | null
    _max: Cc_nutrientMaxAggregateOutputType | null
  }

  type GetCc_nutrientGroupByPayload<T extends cc_nutrientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_nutrientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_nutrientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_nutrientGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_nutrientGroupByOutputType[P]>
        }
      >
    >


  export type cc_nutrientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nutrient_id?: boolean
    nutrient_name?: boolean
    nutrient_description?: boolean
    cc_food_nutrient?: boolean | cc_nutrient$cc_food_nutrientArgs<ExtArgs>
    _count?: boolean | Cc_nutrientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_nutrient"]>

  export type cc_nutrientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nutrient_id?: boolean
    nutrient_name?: boolean
    nutrient_description?: boolean
  }, ExtArgs["result"]["cc_nutrient"]>

  export type cc_nutrientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nutrient_id?: boolean
    nutrient_name?: boolean
    nutrient_description?: boolean
  }, ExtArgs["result"]["cc_nutrient"]>

  export type cc_nutrientSelectScalar = {
    nutrient_id?: boolean
    nutrient_name?: boolean
    nutrient_description?: boolean
  }

  export type cc_nutrientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nutrient_id" | "nutrient_name" | "nutrient_description", ExtArgs["result"]["cc_nutrient"]>
  export type cc_nutrientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_food_nutrient?: boolean | cc_nutrient$cc_food_nutrientArgs<ExtArgs>
    _count?: boolean | Cc_nutrientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cc_nutrientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cc_nutrientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cc_nutrientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_nutrient"
    objects: {
      cc_food_nutrient: Prisma.$cc_food_nutrientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nutrient_id: number
      nutrient_name: string
      nutrient_description: string | null
    }, ExtArgs["result"]["cc_nutrient"]>
    composites: {}
  }

  type cc_nutrientGetPayload<S extends boolean | null | undefined | cc_nutrientDefaultArgs> = $Result.GetResult<Prisma.$cc_nutrientPayload, S>

  type cc_nutrientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_nutrientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_nutrientCountAggregateInputType | true
    }

  export interface cc_nutrientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_nutrient'], meta: { name: 'cc_nutrient' } }
    /**
     * Find zero or one Cc_nutrient that matches the filter.
     * @param {cc_nutrientFindUniqueArgs} args - Arguments to find a Cc_nutrient
     * @example
     * // Get one Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_nutrientFindUniqueArgs>(args: SelectSubset<T, cc_nutrientFindUniqueArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_nutrient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_nutrientFindUniqueOrThrowArgs} args - Arguments to find a Cc_nutrient
     * @example
     * // Get one Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_nutrientFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_nutrientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_nutrient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientFindFirstArgs} args - Arguments to find a Cc_nutrient
     * @example
     * // Get one Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_nutrientFindFirstArgs>(args?: SelectSubset<T, cc_nutrientFindFirstArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_nutrient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientFindFirstOrThrowArgs} args - Arguments to find a Cc_nutrient
     * @example
     * // Get one Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_nutrientFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_nutrientFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_nutrients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_nutrients
     * const cc_nutrients = await prisma.cc_nutrient.findMany()
     * 
     * // Get first 10 Cc_nutrients
     * const cc_nutrients = await prisma.cc_nutrient.findMany({ take: 10 })
     * 
     * // Only select the `nutrient_id`
     * const cc_nutrientWithNutrient_idOnly = await prisma.cc_nutrient.findMany({ select: { nutrient_id: true } })
     * 
     */
    findMany<T extends cc_nutrientFindManyArgs>(args?: SelectSubset<T, cc_nutrientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_nutrient.
     * @param {cc_nutrientCreateArgs} args - Arguments to create a Cc_nutrient.
     * @example
     * // Create one Cc_nutrient
     * const Cc_nutrient = await prisma.cc_nutrient.create({
     *   data: {
     *     // ... data to create a Cc_nutrient
     *   }
     * })
     * 
     */
    create<T extends cc_nutrientCreateArgs>(args: SelectSubset<T, cc_nutrientCreateArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_nutrients.
     * @param {cc_nutrientCreateManyArgs} args - Arguments to create many Cc_nutrients.
     * @example
     * // Create many Cc_nutrients
     * const cc_nutrient = await prisma.cc_nutrient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_nutrientCreateManyArgs>(args?: SelectSubset<T, cc_nutrientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_nutrients and returns the data saved in the database.
     * @param {cc_nutrientCreateManyAndReturnArgs} args - Arguments to create many Cc_nutrients.
     * @example
     * // Create many Cc_nutrients
     * const cc_nutrient = await prisma.cc_nutrient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_nutrients and only return the `nutrient_id`
     * const cc_nutrientWithNutrient_idOnly = await prisma.cc_nutrient.createManyAndReturn({
     *   select: { nutrient_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_nutrientCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_nutrientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_nutrient.
     * @param {cc_nutrientDeleteArgs} args - Arguments to delete one Cc_nutrient.
     * @example
     * // Delete one Cc_nutrient
     * const Cc_nutrient = await prisma.cc_nutrient.delete({
     *   where: {
     *     // ... filter to delete one Cc_nutrient
     *   }
     * })
     * 
     */
    delete<T extends cc_nutrientDeleteArgs>(args: SelectSubset<T, cc_nutrientDeleteArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_nutrient.
     * @param {cc_nutrientUpdateArgs} args - Arguments to update one Cc_nutrient.
     * @example
     * // Update one Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_nutrientUpdateArgs>(args: SelectSubset<T, cc_nutrientUpdateArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_nutrients.
     * @param {cc_nutrientDeleteManyArgs} args - Arguments to filter Cc_nutrients to delete.
     * @example
     * // Delete a few Cc_nutrients
     * const { count } = await prisma.cc_nutrient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_nutrientDeleteManyArgs>(args?: SelectSubset<T, cc_nutrientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_nutrients
     * const cc_nutrient = await prisma.cc_nutrient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_nutrientUpdateManyArgs>(args: SelectSubset<T, cc_nutrientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_nutrients and returns the data updated in the database.
     * @param {cc_nutrientUpdateManyAndReturnArgs} args - Arguments to update many Cc_nutrients.
     * @example
     * // Update many Cc_nutrients
     * const cc_nutrient = await prisma.cc_nutrient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_nutrients and only return the `nutrient_id`
     * const cc_nutrientWithNutrient_idOnly = await prisma.cc_nutrient.updateManyAndReturn({
     *   select: { nutrient_id: true },
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
    updateManyAndReturn<T extends cc_nutrientUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_nutrientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_nutrient.
     * @param {cc_nutrientUpsertArgs} args - Arguments to update or create a Cc_nutrient.
     * @example
     * // Update or create a Cc_nutrient
     * const cc_nutrient = await prisma.cc_nutrient.upsert({
     *   create: {
     *     // ... data to create a Cc_nutrient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_nutrient we want to update
     *   }
     * })
     */
    upsert<T extends cc_nutrientUpsertArgs>(args: SelectSubset<T, cc_nutrientUpsertArgs<ExtArgs>>): Prisma__cc_nutrientClient<$Result.GetResult<Prisma.$cc_nutrientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_nutrients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientCountArgs} args - Arguments to filter Cc_nutrients to count.
     * @example
     * // Count the number of Cc_nutrients
     * const count = await prisma.cc_nutrient.count({
     *   where: {
     *     // ... the filter for the Cc_nutrients we want to count
     *   }
     * })
    **/
    count<T extends cc_nutrientCountArgs>(
      args?: Subset<T, cc_nutrientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_nutrientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_nutrientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_nutrientAggregateArgs>(args: Subset<T, Cc_nutrientAggregateArgs>): Prisma.PrismaPromise<GetCc_nutrientAggregateType<T>>

    /**
     * Group by Cc_nutrient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_nutrientGroupByArgs} args - Group by arguments.
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
      T extends cc_nutrientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_nutrientGroupByArgs['orderBy'] }
        : { orderBy?: cc_nutrientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_nutrientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_nutrientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_nutrient model
   */
  readonly fields: cc_nutrientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_nutrient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_nutrientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_food_nutrient<T extends cc_nutrient$cc_food_nutrientArgs<ExtArgs> = {}>(args?: Subset<T, cc_nutrient$cc_food_nutrientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_food_nutrientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cc_nutrient model
   */
  interface cc_nutrientFieldRefs {
    readonly nutrient_id: FieldRef<"cc_nutrient", 'Int'>
    readonly nutrient_name: FieldRef<"cc_nutrient", 'String'>
    readonly nutrient_description: FieldRef<"cc_nutrient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cc_nutrient findUnique
   */
  export type cc_nutrientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_nutrient to fetch.
     */
    where: cc_nutrientWhereUniqueInput
  }

  /**
   * cc_nutrient findUniqueOrThrow
   */
  export type cc_nutrientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_nutrient to fetch.
     */
    where: cc_nutrientWhereUniqueInput
  }

  /**
   * cc_nutrient findFirst
   */
  export type cc_nutrientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_nutrient to fetch.
     */
    where?: cc_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_nutrients to fetch.
     */
    orderBy?: cc_nutrientOrderByWithRelationInput | cc_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_nutrients.
     */
    cursor?: cc_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_nutrients.
     */
    distinct?: Cc_nutrientScalarFieldEnum | Cc_nutrientScalarFieldEnum[]
  }

  /**
   * cc_nutrient findFirstOrThrow
   */
  export type cc_nutrientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_nutrient to fetch.
     */
    where?: cc_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_nutrients to fetch.
     */
    orderBy?: cc_nutrientOrderByWithRelationInput | cc_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_nutrients.
     */
    cursor?: cc_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_nutrients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_nutrients.
     */
    distinct?: Cc_nutrientScalarFieldEnum | Cc_nutrientScalarFieldEnum[]
  }

  /**
   * cc_nutrient findMany
   */
  export type cc_nutrientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter, which cc_nutrients to fetch.
     */
    where?: cc_nutrientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_nutrients to fetch.
     */
    orderBy?: cc_nutrientOrderByWithRelationInput | cc_nutrientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_nutrients.
     */
    cursor?: cc_nutrientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_nutrients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_nutrients.
     */
    skip?: number
    distinct?: Cc_nutrientScalarFieldEnum | Cc_nutrientScalarFieldEnum[]
  }

  /**
   * cc_nutrient create
   */
  export type cc_nutrientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_nutrient.
     */
    data: XOR<cc_nutrientCreateInput, cc_nutrientUncheckedCreateInput>
  }

  /**
   * cc_nutrient createMany
   */
  export type cc_nutrientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_nutrients.
     */
    data: cc_nutrientCreateManyInput | cc_nutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_nutrient createManyAndReturn
   */
  export type cc_nutrientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * The data used to create many cc_nutrients.
     */
    data: cc_nutrientCreateManyInput | cc_nutrientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_nutrient update
   */
  export type cc_nutrientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_nutrient.
     */
    data: XOR<cc_nutrientUpdateInput, cc_nutrientUncheckedUpdateInput>
    /**
     * Choose, which cc_nutrient to update.
     */
    where: cc_nutrientWhereUniqueInput
  }

  /**
   * cc_nutrient updateMany
   */
  export type cc_nutrientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_nutrients.
     */
    data: XOR<cc_nutrientUpdateManyMutationInput, cc_nutrientUncheckedUpdateManyInput>
    /**
     * Filter which cc_nutrients to update
     */
    where?: cc_nutrientWhereInput
    /**
     * Limit how many cc_nutrients to update.
     */
    limit?: number
  }

  /**
   * cc_nutrient updateManyAndReturn
   */
  export type cc_nutrientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * The data used to update cc_nutrients.
     */
    data: XOR<cc_nutrientUpdateManyMutationInput, cc_nutrientUncheckedUpdateManyInput>
    /**
     * Filter which cc_nutrients to update
     */
    where?: cc_nutrientWhereInput
    /**
     * Limit how many cc_nutrients to update.
     */
    limit?: number
  }

  /**
   * cc_nutrient upsert
   */
  export type cc_nutrientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_nutrient to update in case it exists.
     */
    where: cc_nutrientWhereUniqueInput
    /**
     * In case the cc_nutrient found by the `where` argument doesn't exist, create a new cc_nutrient with this data.
     */
    create: XOR<cc_nutrientCreateInput, cc_nutrientUncheckedCreateInput>
    /**
     * In case the cc_nutrient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_nutrientUpdateInput, cc_nutrientUncheckedUpdateInput>
  }

  /**
   * cc_nutrient delete
   */
  export type cc_nutrientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
    /**
     * Filter which cc_nutrient to delete.
     */
    where: cc_nutrientWhereUniqueInput
  }

  /**
   * cc_nutrient deleteMany
   */
  export type cc_nutrientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_nutrients to delete
     */
    where?: cc_nutrientWhereInput
    /**
     * Limit how many cc_nutrients to delete.
     */
    limit?: number
  }

  /**
   * cc_nutrient.cc_food_nutrient
   */
  export type cc_nutrient$cc_food_nutrientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_food_nutrient
     */
    select?: cc_food_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_food_nutrient
     */
    omit?: cc_food_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_food_nutrientInclude<ExtArgs> | null
    where?: cc_food_nutrientWhereInput
    orderBy?: cc_food_nutrientOrderByWithRelationInput | cc_food_nutrientOrderByWithRelationInput[]
    cursor?: cc_food_nutrientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cc_food_nutrientScalarFieldEnum | Cc_food_nutrientScalarFieldEnum[]
  }

  /**
   * cc_nutrient without action
   */
  export type cc_nutrientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_nutrient
     */
    select?: cc_nutrientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_nutrient
     */
    omit?: cc_nutrientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_nutrientInclude<ExtArgs> | null
  }


  /**
   * Model cc_user
   */

  export type AggregateCc_user = {
    _count: Cc_userCountAggregateOutputType | null
    _avg: Cc_userAvgAggregateOutputType | null
    _sum: Cc_userSumAggregateOutputType | null
    _min: Cc_userMinAggregateOutputType | null
    _max: Cc_userMaxAggregateOutputType | null
  }

  export type Cc_userAvgAggregateOutputType = {
    user_id: number | null
  }

  export type Cc_userSumAggregateOutputType = {
    user_id: number | null
  }

  export type Cc_userMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
  }

  export type Cc_userMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
  }

  export type Cc_userCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    _all: number
  }


  export type Cc_userAvgAggregateInputType = {
    user_id?: true
  }

  export type Cc_userSumAggregateInputType = {
    user_id?: true
  }

  export type Cc_userMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
  }

  export type Cc_userMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
  }

  export type Cc_userCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type Cc_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_user to aggregate.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_users
    **/
    _count?: true | Cc_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_userMaxAggregateInputType
  }

  export type GetCc_userAggregateType<T extends Cc_userAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_user[P]>
      : GetScalarType<T[P], AggregateCc_user[P]>
  }




  export type cc_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_userWhereInput
    orderBy?: cc_userOrderByWithAggregationInput | cc_userOrderByWithAggregationInput[]
    by: Cc_userScalarFieldEnum[] | Cc_userScalarFieldEnum
    having?: cc_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_userCountAggregateInputType | true
    _avg?: Cc_userAvgAggregateInputType
    _sum?: Cc_userSumAggregateInputType
    _min?: Cc_userMinAggregateInputType
    _max?: Cc_userMaxAggregateInputType
  }

  export type Cc_userGroupByOutputType = {
    user_id: number
    email: string
    password: string
    _count: Cc_userCountAggregateOutputType | null
    _avg: Cc_userAvgAggregateOutputType | null
    _sum: Cc_userSumAggregateOutputType | null
    _min: Cc_userMinAggregateOutputType | null
    _max: Cc_userMaxAggregateOutputType | null
  }

  type GetCc_userGroupByPayload<T extends cc_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_userGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_userGroupByOutputType[P]>
        }
      >
    >


  export type cc_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    cc_user_illness?: boolean | cc_user$cc_user_illnessArgs<ExtArgs>
    _count?: boolean | Cc_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_user"]>

  export type cc_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["cc_user"]>

  export type cc_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["cc_user"]>

  export type cc_userSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
  }

  export type cc_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password", ExtArgs["result"]["cc_user"]>
  export type cc_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_user_illness?: boolean | cc_user$cc_user_illnessArgs<ExtArgs>
    _count?: boolean | Cc_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cc_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cc_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cc_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_user"
    objects: {
      cc_user_illness: Prisma.$cc_user_illnessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
    }, ExtArgs["result"]["cc_user"]>
    composites: {}
  }

  type cc_userGetPayload<S extends boolean | null | undefined | cc_userDefaultArgs> = $Result.GetResult<Prisma.$cc_userPayload, S>

  type cc_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_userCountAggregateInputType | true
    }

  export interface cc_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_user'], meta: { name: 'cc_user' } }
    /**
     * Find zero or one Cc_user that matches the filter.
     * @param {cc_userFindUniqueArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_userFindUniqueArgs>(args: SelectSubset<T, cc_userFindUniqueArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_userFindUniqueOrThrowArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_userFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindFirstArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_userFindFirstArgs>(args?: SelectSubset<T, cc_userFindFirstArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindFirstOrThrowArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_userFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_users
     * const cc_users = await prisma.cc_user.findMany()
     * 
     * // Get first 10 Cc_users
     * const cc_users = await prisma.cc_user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const cc_userWithUser_idOnly = await prisma.cc_user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends cc_userFindManyArgs>(args?: SelectSubset<T, cc_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_user.
     * @param {cc_userCreateArgs} args - Arguments to create a Cc_user.
     * @example
     * // Create one Cc_user
     * const Cc_user = await prisma.cc_user.create({
     *   data: {
     *     // ... data to create a Cc_user
     *   }
     * })
     * 
     */
    create<T extends cc_userCreateArgs>(args: SelectSubset<T, cc_userCreateArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_users.
     * @param {cc_userCreateManyArgs} args - Arguments to create many Cc_users.
     * @example
     * // Create many Cc_users
     * const cc_user = await prisma.cc_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_userCreateManyArgs>(args?: SelectSubset<T, cc_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_users and returns the data saved in the database.
     * @param {cc_userCreateManyAndReturnArgs} args - Arguments to create many Cc_users.
     * @example
     * // Create many Cc_users
     * const cc_user = await prisma.cc_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_users and only return the `user_id`
     * const cc_userWithUser_idOnly = await prisma.cc_user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_userCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_user.
     * @param {cc_userDeleteArgs} args - Arguments to delete one Cc_user.
     * @example
     * // Delete one Cc_user
     * const Cc_user = await prisma.cc_user.delete({
     *   where: {
     *     // ... filter to delete one Cc_user
     *   }
     * })
     * 
     */
    delete<T extends cc_userDeleteArgs>(args: SelectSubset<T, cc_userDeleteArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_user.
     * @param {cc_userUpdateArgs} args - Arguments to update one Cc_user.
     * @example
     * // Update one Cc_user
     * const cc_user = await prisma.cc_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_userUpdateArgs>(args: SelectSubset<T, cc_userUpdateArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_users.
     * @param {cc_userDeleteManyArgs} args - Arguments to filter Cc_users to delete.
     * @example
     * // Delete a few Cc_users
     * const { count } = await prisma.cc_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_userDeleteManyArgs>(args?: SelectSubset<T, cc_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_users
     * const cc_user = await prisma.cc_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_userUpdateManyArgs>(args: SelectSubset<T, cc_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_users and returns the data updated in the database.
     * @param {cc_userUpdateManyAndReturnArgs} args - Arguments to update many Cc_users.
     * @example
     * // Update many Cc_users
     * const cc_user = await prisma.cc_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_users and only return the `user_id`
     * const cc_userWithUser_idOnly = await prisma.cc_user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends cc_userUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_user.
     * @param {cc_userUpsertArgs} args - Arguments to update or create a Cc_user.
     * @example
     * // Update or create a Cc_user
     * const cc_user = await prisma.cc_user.upsert({
     *   create: {
     *     // ... data to create a Cc_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_user we want to update
     *   }
     * })
     */
    upsert<T extends cc_userUpsertArgs>(args: SelectSubset<T, cc_userUpsertArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userCountArgs} args - Arguments to filter Cc_users to count.
     * @example
     * // Count the number of Cc_users
     * const count = await prisma.cc_user.count({
     *   where: {
     *     // ... the filter for the Cc_users we want to count
     *   }
     * })
    **/
    count<T extends cc_userCountArgs>(
      args?: Subset<T, cc_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_userAggregateArgs>(args: Subset<T, Cc_userAggregateArgs>): Prisma.PrismaPromise<GetCc_userAggregateType<T>>

    /**
     * Group by Cc_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userGroupByArgs} args - Group by arguments.
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
      T extends cc_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_userGroupByArgs['orderBy'] }
        : { orderBy?: cc_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_user model
   */
  readonly fields: cc_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_user_illness<T extends cc_user$cc_user_illnessArgs<ExtArgs> = {}>(args?: Subset<T, cc_user$cc_user_illnessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cc_user model
   */
  interface cc_userFieldRefs {
    readonly user_id: FieldRef<"cc_user", 'Int'>
    readonly email: FieldRef<"cc_user", 'String'>
    readonly password: FieldRef<"cc_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cc_user findUnique
   */
  export type cc_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where: cc_userWhereUniqueInput
  }

  /**
   * cc_user findUniqueOrThrow
   */
  export type cc_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where: cc_userWhereUniqueInput
  }

  /**
   * cc_user findFirst
   */
  export type cc_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_users.
     */
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }

  /**
   * cc_user findFirstOrThrow
   */
  export type cc_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_users.
     */
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }

  /**
   * cc_user findMany
   */
  export type cc_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter, which cc_users to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }

  /**
   * cc_user create
   */
  export type cc_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_user.
     */
    data: XOR<cc_userCreateInput, cc_userUncheckedCreateInput>
  }

  /**
   * cc_user createMany
   */
  export type cc_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_users.
     */
    data: cc_userCreateManyInput | cc_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_user createManyAndReturn
   */
  export type cc_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * The data used to create many cc_users.
     */
    data: cc_userCreateManyInput | cc_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_user update
   */
  export type cc_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_user.
     */
    data: XOR<cc_userUpdateInput, cc_userUncheckedUpdateInput>
    /**
     * Choose, which cc_user to update.
     */
    where: cc_userWhereUniqueInput
  }

  /**
   * cc_user updateMany
   */
  export type cc_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_users.
     */
    data: XOR<cc_userUpdateManyMutationInput, cc_userUncheckedUpdateManyInput>
    /**
     * Filter which cc_users to update
     */
    where?: cc_userWhereInput
    /**
     * Limit how many cc_users to update.
     */
    limit?: number
  }

  /**
   * cc_user updateManyAndReturn
   */
  export type cc_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * The data used to update cc_users.
     */
    data: XOR<cc_userUpdateManyMutationInput, cc_userUncheckedUpdateManyInput>
    /**
     * Filter which cc_users to update
     */
    where?: cc_userWhereInput
    /**
     * Limit how many cc_users to update.
     */
    limit?: number
  }

  /**
   * cc_user upsert
   */
  export type cc_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_user to update in case it exists.
     */
    where: cc_userWhereUniqueInput
    /**
     * In case the cc_user found by the `where` argument doesn't exist, create a new cc_user with this data.
     */
    create: XOR<cc_userCreateInput, cc_userUncheckedCreateInput>
    /**
     * In case the cc_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_userUpdateInput, cc_userUncheckedUpdateInput>
  }

  /**
   * cc_user delete
   */
  export type cc_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
    /**
     * Filter which cc_user to delete.
     */
    where: cc_userWhereUniqueInput
  }

  /**
   * cc_user deleteMany
   */
  export type cc_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_users to delete
     */
    where?: cc_userWhereInput
    /**
     * Limit how many cc_users to delete.
     */
    limit?: number
  }

  /**
   * cc_user.cc_user_illness
   */
  export type cc_user$cc_user_illnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    where?: cc_user_illnessWhereInput
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    cursor?: cc_user_illnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cc_user_illnessScalarFieldEnum | Cc_user_illnessScalarFieldEnum[]
  }

  /**
   * cc_user without action
   */
  export type cc_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user
     */
    omit?: cc_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_userInclude<ExtArgs> | null
  }


  /**
   * Model cc_user_illness
   */

  export type AggregateCc_user_illness = {
    _count: Cc_user_illnessCountAggregateOutputType | null
    _avg: Cc_user_illnessAvgAggregateOutputType | null
    _sum: Cc_user_illnessSumAggregateOutputType | null
    _min: Cc_user_illnessMinAggregateOutputType | null
    _max: Cc_user_illnessMaxAggregateOutputType | null
  }

  export type Cc_user_illnessAvgAggregateOutputType = {
    user_id: number | null
    illness_id: number | null
  }

  export type Cc_user_illnessSumAggregateOutputType = {
    user_id: number | null
    illness_id: number | null
  }

  export type Cc_user_illnessMinAggregateOutputType = {
    user_id: number | null
    illness_id: number | null
  }

  export type Cc_user_illnessMaxAggregateOutputType = {
    user_id: number | null
    illness_id: number | null
  }

  export type Cc_user_illnessCountAggregateOutputType = {
    user_id: number
    illness_id: number
    _all: number
  }


  export type Cc_user_illnessAvgAggregateInputType = {
    user_id?: true
    illness_id?: true
  }

  export type Cc_user_illnessSumAggregateInputType = {
    user_id?: true
    illness_id?: true
  }

  export type Cc_user_illnessMinAggregateInputType = {
    user_id?: true
    illness_id?: true
  }

  export type Cc_user_illnessMaxAggregateInputType = {
    user_id?: true
    illness_id?: true
  }

  export type Cc_user_illnessCountAggregateInputType = {
    user_id?: true
    illness_id?: true
    _all?: true
  }

  export type Cc_user_illnessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_user_illness to aggregate.
     */
    where?: cc_user_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_user_illnesses to fetch.
     */
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_user_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_user_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_user_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_user_illnesses
    **/
    _count?: true | Cc_user_illnessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_user_illnessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_user_illnessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_user_illnessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_user_illnessMaxAggregateInputType
  }

  export type GetCc_user_illnessAggregateType<T extends Cc_user_illnessAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_user_illness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_user_illness[P]>
      : GetScalarType<T[P], AggregateCc_user_illness[P]>
  }




  export type cc_user_illnessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_user_illnessWhereInput
    orderBy?: cc_user_illnessOrderByWithAggregationInput | cc_user_illnessOrderByWithAggregationInput[]
    by: Cc_user_illnessScalarFieldEnum[] | Cc_user_illnessScalarFieldEnum
    having?: cc_user_illnessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_user_illnessCountAggregateInputType | true
    _avg?: Cc_user_illnessAvgAggregateInputType
    _sum?: Cc_user_illnessSumAggregateInputType
    _min?: Cc_user_illnessMinAggregateInputType
    _max?: Cc_user_illnessMaxAggregateInputType
  }

  export type Cc_user_illnessGroupByOutputType = {
    user_id: number
    illness_id: number
    _count: Cc_user_illnessCountAggregateOutputType | null
    _avg: Cc_user_illnessAvgAggregateOutputType | null
    _sum: Cc_user_illnessSumAggregateOutputType | null
    _min: Cc_user_illnessMinAggregateOutputType | null
    _max: Cc_user_illnessMaxAggregateOutputType | null
  }

  type GetCc_user_illnessGroupByPayload<T extends cc_user_illnessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_user_illnessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_user_illnessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_user_illnessGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_user_illnessGroupByOutputType[P]>
        }
      >
    >


  export type cc_user_illnessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    illness_id?: boolean
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_user_illness"]>

  export type cc_user_illnessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    illness_id?: boolean
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_user_illness"]>

  export type cc_user_illnessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    illness_id?: boolean
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cc_user_illness"]>

  export type cc_user_illnessSelectScalar = {
    user_id?: boolean
    illness_id?: boolean
  }

  export type cc_user_illnessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "illness_id", ExtArgs["result"]["cc_user_illness"]>
  export type cc_user_illnessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }
  export type cc_user_illnessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }
  export type cc_user_illnessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cc_illness?: boolean | cc_illnessDefaultArgs<ExtArgs>
    cc_user?: boolean | cc_userDefaultArgs<ExtArgs>
  }

  export type $cc_user_illnessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_user_illness"
    objects: {
      cc_illness: Prisma.$cc_illnessPayload<ExtArgs>
      cc_user: Prisma.$cc_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      illness_id: number
    }, ExtArgs["result"]["cc_user_illness"]>
    composites: {}
  }

  type cc_user_illnessGetPayload<S extends boolean | null | undefined | cc_user_illnessDefaultArgs> = $Result.GetResult<Prisma.$cc_user_illnessPayload, S>

  type cc_user_illnessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cc_user_illnessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cc_user_illnessCountAggregateInputType | true
    }

  export interface cc_user_illnessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_user_illness'], meta: { name: 'cc_user_illness' } }
    /**
     * Find zero or one Cc_user_illness that matches the filter.
     * @param {cc_user_illnessFindUniqueArgs} args - Arguments to find a Cc_user_illness
     * @example
     * // Get one Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cc_user_illnessFindUniqueArgs>(args: SelectSubset<T, cc_user_illnessFindUniqueArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cc_user_illness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cc_user_illnessFindUniqueOrThrowArgs} args - Arguments to find a Cc_user_illness
     * @example
     * // Get one Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cc_user_illnessFindUniqueOrThrowArgs>(args: SelectSubset<T, cc_user_illnessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_user_illness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessFindFirstArgs} args - Arguments to find a Cc_user_illness
     * @example
     * // Get one Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cc_user_illnessFindFirstArgs>(args?: SelectSubset<T, cc_user_illnessFindFirstArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cc_user_illness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessFindFirstOrThrowArgs} args - Arguments to find a Cc_user_illness
     * @example
     * // Get one Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cc_user_illnessFindFirstOrThrowArgs>(args?: SelectSubset<T, cc_user_illnessFindFirstOrThrowArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cc_user_illnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_user_illnesses
     * const cc_user_illnesses = await prisma.cc_user_illness.findMany()
     * 
     * // Get first 10 Cc_user_illnesses
     * const cc_user_illnesses = await prisma.cc_user_illness.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const cc_user_illnessWithUser_idOnly = await prisma.cc_user_illness.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends cc_user_illnessFindManyArgs>(args?: SelectSubset<T, cc_user_illnessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cc_user_illness.
     * @param {cc_user_illnessCreateArgs} args - Arguments to create a Cc_user_illness.
     * @example
     * // Create one Cc_user_illness
     * const Cc_user_illness = await prisma.cc_user_illness.create({
     *   data: {
     *     // ... data to create a Cc_user_illness
     *   }
     * })
     * 
     */
    create<T extends cc_user_illnessCreateArgs>(args: SelectSubset<T, cc_user_illnessCreateArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cc_user_illnesses.
     * @param {cc_user_illnessCreateManyArgs} args - Arguments to create many Cc_user_illnesses.
     * @example
     * // Create many Cc_user_illnesses
     * const cc_user_illness = await prisma.cc_user_illness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cc_user_illnessCreateManyArgs>(args?: SelectSubset<T, cc_user_illnessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cc_user_illnesses and returns the data saved in the database.
     * @param {cc_user_illnessCreateManyAndReturnArgs} args - Arguments to create many Cc_user_illnesses.
     * @example
     * // Create many Cc_user_illnesses
     * const cc_user_illness = await prisma.cc_user_illness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cc_user_illnesses and only return the `user_id`
     * const cc_user_illnessWithUser_idOnly = await prisma.cc_user_illness.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cc_user_illnessCreateManyAndReturnArgs>(args?: SelectSubset<T, cc_user_illnessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cc_user_illness.
     * @param {cc_user_illnessDeleteArgs} args - Arguments to delete one Cc_user_illness.
     * @example
     * // Delete one Cc_user_illness
     * const Cc_user_illness = await prisma.cc_user_illness.delete({
     *   where: {
     *     // ... filter to delete one Cc_user_illness
     *   }
     * })
     * 
     */
    delete<T extends cc_user_illnessDeleteArgs>(args: SelectSubset<T, cc_user_illnessDeleteArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cc_user_illness.
     * @param {cc_user_illnessUpdateArgs} args - Arguments to update one Cc_user_illness.
     * @example
     * // Update one Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cc_user_illnessUpdateArgs>(args: SelectSubset<T, cc_user_illnessUpdateArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cc_user_illnesses.
     * @param {cc_user_illnessDeleteManyArgs} args - Arguments to filter Cc_user_illnesses to delete.
     * @example
     * // Delete a few Cc_user_illnesses
     * const { count } = await prisma.cc_user_illness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cc_user_illnessDeleteManyArgs>(args?: SelectSubset<T, cc_user_illnessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_user_illnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_user_illnesses
     * const cc_user_illness = await prisma.cc_user_illness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cc_user_illnessUpdateManyArgs>(args: SelectSubset<T, cc_user_illnessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_user_illnesses and returns the data updated in the database.
     * @param {cc_user_illnessUpdateManyAndReturnArgs} args - Arguments to update many Cc_user_illnesses.
     * @example
     * // Update many Cc_user_illnesses
     * const cc_user_illness = await prisma.cc_user_illness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cc_user_illnesses and only return the `user_id`
     * const cc_user_illnessWithUser_idOnly = await prisma.cc_user_illness.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends cc_user_illnessUpdateManyAndReturnArgs>(args: SelectSubset<T, cc_user_illnessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cc_user_illness.
     * @param {cc_user_illnessUpsertArgs} args - Arguments to update or create a Cc_user_illness.
     * @example
     * // Update or create a Cc_user_illness
     * const cc_user_illness = await prisma.cc_user_illness.upsert({
     *   create: {
     *     // ... data to create a Cc_user_illness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_user_illness we want to update
     *   }
     * })
     */
    upsert<T extends cc_user_illnessUpsertArgs>(args: SelectSubset<T, cc_user_illnessUpsertArgs<ExtArgs>>): Prisma__cc_user_illnessClient<$Result.GetResult<Prisma.$cc_user_illnessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cc_user_illnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessCountArgs} args - Arguments to filter Cc_user_illnesses to count.
     * @example
     * // Count the number of Cc_user_illnesses
     * const count = await prisma.cc_user_illness.count({
     *   where: {
     *     // ... the filter for the Cc_user_illnesses we want to count
     *   }
     * })
    **/
    count<T extends cc_user_illnessCountArgs>(
      args?: Subset<T, cc_user_illnessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_user_illnessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_user_illness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_user_illnessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cc_user_illnessAggregateArgs>(args: Subset<T, Cc_user_illnessAggregateArgs>): Prisma.PrismaPromise<GetCc_user_illnessAggregateType<T>>

    /**
     * Group by Cc_user_illness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_user_illnessGroupByArgs} args - Group by arguments.
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
      T extends cc_user_illnessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_user_illnessGroupByArgs['orderBy'] }
        : { orderBy?: cc_user_illnessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cc_user_illnessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_user_illnessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_user_illness model
   */
  readonly fields: cc_user_illnessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_user_illness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_user_illnessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cc_illness<T extends cc_illnessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cc_illnessDefaultArgs<ExtArgs>>): Prisma__cc_illnessClient<$Result.GetResult<Prisma.$cc_illnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cc_user<T extends cc_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cc_userDefaultArgs<ExtArgs>>): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cc_user_illness model
   */
  interface cc_user_illnessFieldRefs {
    readonly user_id: FieldRef<"cc_user_illness", 'Int'>
    readonly illness_id: FieldRef<"cc_user_illness", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cc_user_illness findUnique
   */
  export type cc_user_illnessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_user_illness to fetch.
     */
    where: cc_user_illnessWhereUniqueInput
  }

  /**
   * cc_user_illness findUniqueOrThrow
   */
  export type cc_user_illnessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_user_illness to fetch.
     */
    where: cc_user_illnessWhereUniqueInput
  }

  /**
   * cc_user_illness findFirst
   */
  export type cc_user_illnessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_user_illness to fetch.
     */
    where?: cc_user_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_user_illnesses to fetch.
     */
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_user_illnesses.
     */
    cursor?: cc_user_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_user_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_user_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_user_illnesses.
     */
    distinct?: Cc_user_illnessScalarFieldEnum | Cc_user_illnessScalarFieldEnum[]
  }

  /**
   * cc_user_illness findFirstOrThrow
   */
  export type cc_user_illnessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_user_illness to fetch.
     */
    where?: cc_user_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_user_illnesses to fetch.
     */
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_user_illnesses.
     */
    cursor?: cc_user_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_user_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_user_illnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_user_illnesses.
     */
    distinct?: Cc_user_illnessScalarFieldEnum | Cc_user_illnessScalarFieldEnum[]
  }

  /**
   * cc_user_illness findMany
   */
  export type cc_user_illnessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter, which cc_user_illnesses to fetch.
     */
    where?: cc_user_illnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_user_illnesses to fetch.
     */
    orderBy?: cc_user_illnessOrderByWithRelationInput | cc_user_illnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_user_illnesses.
     */
    cursor?: cc_user_illnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_user_illnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_user_illnesses.
     */
    skip?: number
    distinct?: Cc_user_illnessScalarFieldEnum | Cc_user_illnessScalarFieldEnum[]
  }

  /**
   * cc_user_illness create
   */
  export type cc_user_illnessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * The data needed to create a cc_user_illness.
     */
    data: XOR<cc_user_illnessCreateInput, cc_user_illnessUncheckedCreateInput>
  }

  /**
   * cc_user_illness createMany
   */
  export type cc_user_illnessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_user_illnesses.
     */
    data: cc_user_illnessCreateManyInput | cc_user_illnessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cc_user_illness createManyAndReturn
   */
  export type cc_user_illnessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * The data used to create many cc_user_illnesses.
     */
    data: cc_user_illnessCreateManyInput | cc_user_illnessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cc_user_illness update
   */
  export type cc_user_illnessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * The data needed to update a cc_user_illness.
     */
    data: XOR<cc_user_illnessUpdateInput, cc_user_illnessUncheckedUpdateInput>
    /**
     * Choose, which cc_user_illness to update.
     */
    where: cc_user_illnessWhereUniqueInput
  }

  /**
   * cc_user_illness updateMany
   */
  export type cc_user_illnessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_user_illnesses.
     */
    data: XOR<cc_user_illnessUpdateManyMutationInput, cc_user_illnessUncheckedUpdateManyInput>
    /**
     * Filter which cc_user_illnesses to update
     */
    where?: cc_user_illnessWhereInput
    /**
     * Limit how many cc_user_illnesses to update.
     */
    limit?: number
  }

  /**
   * cc_user_illness updateManyAndReturn
   */
  export type cc_user_illnessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * The data used to update cc_user_illnesses.
     */
    data: XOR<cc_user_illnessUpdateManyMutationInput, cc_user_illnessUncheckedUpdateManyInput>
    /**
     * Filter which cc_user_illnesses to update
     */
    where?: cc_user_illnessWhereInput
    /**
     * Limit how many cc_user_illnesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cc_user_illness upsert
   */
  export type cc_user_illnessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * The filter to search for the cc_user_illness to update in case it exists.
     */
    where: cc_user_illnessWhereUniqueInput
    /**
     * In case the cc_user_illness found by the `where` argument doesn't exist, create a new cc_user_illness with this data.
     */
    create: XOR<cc_user_illnessCreateInput, cc_user_illnessUncheckedCreateInput>
    /**
     * In case the cc_user_illness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_user_illnessUpdateInput, cc_user_illnessUncheckedUpdateInput>
  }

  /**
   * cc_user_illness delete
   */
  export type cc_user_illnessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
    /**
     * Filter which cc_user_illness to delete.
     */
    where: cc_user_illnessWhereUniqueInput
  }

  /**
   * cc_user_illness deleteMany
   */
  export type cc_user_illnessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_user_illnesses to delete
     */
    where?: cc_user_illnessWhereInput
    /**
     * Limit how many cc_user_illnesses to delete.
     */
    limit?: number
  }

  /**
   * cc_user_illness without action
   */
  export type cc_user_illnessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user_illness
     */
    select?: cc_user_illnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cc_user_illness
     */
    omit?: cc_user_illnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cc_user_illnessInclude<ExtArgs> | null
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


  export const Cc_foodScalarFieldEnum: {
    food_id: 'food_id',
    food_name: 'food_name',
    food_description: 'food_description'
  };

  export type Cc_foodScalarFieldEnum = (typeof Cc_foodScalarFieldEnum)[keyof typeof Cc_foodScalarFieldEnum]


  export const Cc_food_nutrientScalarFieldEnum: {
    food_id: 'food_id',
    nutrient_id: 'nutrient_id'
  };

  export type Cc_food_nutrientScalarFieldEnum = (typeof Cc_food_nutrientScalarFieldEnum)[keyof typeof Cc_food_nutrientScalarFieldEnum]


  export const Cc_illnessScalarFieldEnum: {
    illness_id: 'illness_id',
    illness_name: 'illness_name',
    illness_description: 'illness_description'
  };

  export type Cc_illnessScalarFieldEnum = (typeof Cc_illnessScalarFieldEnum)[keyof typeof Cc_illnessScalarFieldEnum]


  export const Cc_nutrientScalarFieldEnum: {
    nutrient_id: 'nutrient_id',
    nutrient_name: 'nutrient_name',
    nutrient_description: 'nutrient_description'
  };

  export type Cc_nutrientScalarFieldEnum = (typeof Cc_nutrientScalarFieldEnum)[keyof typeof Cc_nutrientScalarFieldEnum]


  export const Cc_userScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password'
  };

  export type Cc_userScalarFieldEnum = (typeof Cc_userScalarFieldEnum)[keyof typeof Cc_userScalarFieldEnum]


  export const Cc_user_illnessScalarFieldEnum: {
    user_id: 'user_id',
    illness_id: 'illness_id'
  };

  export type Cc_user_illnessScalarFieldEnum = (typeof Cc_user_illnessScalarFieldEnum)[keyof typeof Cc_user_illnessScalarFieldEnum]


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


  export type cc_foodWhereInput = {
    AND?: cc_foodWhereInput | cc_foodWhereInput[]
    OR?: cc_foodWhereInput[]
    NOT?: cc_foodWhereInput | cc_foodWhereInput[]
    food_id?: IntFilter<"cc_food"> | number
    food_name?: StringFilter<"cc_food"> | string
    food_description?: StringNullableFilter<"cc_food"> | string | null
    cc_food_nutrient?: Cc_food_nutrientListRelationFilter
  }

  export type cc_foodOrderByWithRelationInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    food_description?: SortOrderInput | SortOrder
    cc_food_nutrient?: cc_food_nutrientOrderByRelationAggregateInput
  }

  export type cc_foodWhereUniqueInput = Prisma.AtLeast<{
    food_id?: number
    AND?: cc_foodWhereInput | cc_foodWhereInput[]
    OR?: cc_foodWhereInput[]
    NOT?: cc_foodWhereInput | cc_foodWhereInput[]
    food_name?: StringFilter<"cc_food"> | string
    food_description?: StringNullableFilter<"cc_food"> | string | null
    cc_food_nutrient?: Cc_food_nutrientListRelationFilter
  }, "food_id">

  export type cc_foodOrderByWithAggregationInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    food_description?: SortOrderInput | SortOrder
    _count?: cc_foodCountOrderByAggregateInput
    _avg?: cc_foodAvgOrderByAggregateInput
    _max?: cc_foodMaxOrderByAggregateInput
    _min?: cc_foodMinOrderByAggregateInput
    _sum?: cc_foodSumOrderByAggregateInput
  }

  export type cc_foodScalarWhereWithAggregatesInput = {
    AND?: cc_foodScalarWhereWithAggregatesInput | cc_foodScalarWhereWithAggregatesInput[]
    OR?: cc_foodScalarWhereWithAggregatesInput[]
    NOT?: cc_foodScalarWhereWithAggregatesInput | cc_foodScalarWhereWithAggregatesInput[]
    food_id?: IntWithAggregatesFilter<"cc_food"> | number
    food_name?: StringWithAggregatesFilter<"cc_food"> | string
    food_description?: StringNullableWithAggregatesFilter<"cc_food"> | string | null
  }

  export type cc_food_nutrientWhereInput = {
    AND?: cc_food_nutrientWhereInput | cc_food_nutrientWhereInput[]
    OR?: cc_food_nutrientWhereInput[]
    NOT?: cc_food_nutrientWhereInput | cc_food_nutrientWhereInput[]
    food_id?: IntFilter<"cc_food_nutrient"> | number
    nutrient_id?: IntFilter<"cc_food_nutrient"> | number
    cc_food?: XOR<Cc_foodScalarRelationFilter, cc_foodWhereInput>
    cc_nutrient?: XOR<Cc_nutrientScalarRelationFilter, cc_nutrientWhereInput>
  }

  export type cc_food_nutrientOrderByWithRelationInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
    cc_food?: cc_foodOrderByWithRelationInput
    cc_nutrient?: cc_nutrientOrderByWithRelationInput
  }

  export type cc_food_nutrientWhereUniqueInput = Prisma.AtLeast<{
    food_id_nutrient_id?: cc_food_nutrientFood_idNutrient_idCompoundUniqueInput
    AND?: cc_food_nutrientWhereInput | cc_food_nutrientWhereInput[]
    OR?: cc_food_nutrientWhereInput[]
    NOT?: cc_food_nutrientWhereInput | cc_food_nutrientWhereInput[]
    food_id?: IntFilter<"cc_food_nutrient"> | number
    nutrient_id?: IntFilter<"cc_food_nutrient"> | number
    cc_food?: XOR<Cc_foodScalarRelationFilter, cc_foodWhereInput>
    cc_nutrient?: XOR<Cc_nutrientScalarRelationFilter, cc_nutrientWhereInput>
  }, "food_id_nutrient_id">

  export type cc_food_nutrientOrderByWithAggregationInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
    _count?: cc_food_nutrientCountOrderByAggregateInput
    _avg?: cc_food_nutrientAvgOrderByAggregateInput
    _max?: cc_food_nutrientMaxOrderByAggregateInput
    _min?: cc_food_nutrientMinOrderByAggregateInput
    _sum?: cc_food_nutrientSumOrderByAggregateInput
  }

  export type cc_food_nutrientScalarWhereWithAggregatesInput = {
    AND?: cc_food_nutrientScalarWhereWithAggregatesInput | cc_food_nutrientScalarWhereWithAggregatesInput[]
    OR?: cc_food_nutrientScalarWhereWithAggregatesInput[]
    NOT?: cc_food_nutrientScalarWhereWithAggregatesInput | cc_food_nutrientScalarWhereWithAggregatesInput[]
    food_id?: IntWithAggregatesFilter<"cc_food_nutrient"> | number
    nutrient_id?: IntWithAggregatesFilter<"cc_food_nutrient"> | number
  }

  export type cc_illnessWhereInput = {
    AND?: cc_illnessWhereInput | cc_illnessWhereInput[]
    OR?: cc_illnessWhereInput[]
    NOT?: cc_illnessWhereInput | cc_illnessWhereInput[]
    illness_id?: IntFilter<"cc_illness"> | number
    illness_name?: StringFilter<"cc_illness"> | string
    illness_description?: StringNullableFilter<"cc_illness"> | string | null
    cc_user_illness?: Cc_user_illnessListRelationFilter
  }

  export type cc_illnessOrderByWithRelationInput = {
    illness_id?: SortOrder
    illness_name?: SortOrder
    illness_description?: SortOrderInput | SortOrder
    cc_user_illness?: cc_user_illnessOrderByRelationAggregateInput
  }

  export type cc_illnessWhereUniqueInput = Prisma.AtLeast<{
    illness_id?: number
    AND?: cc_illnessWhereInput | cc_illnessWhereInput[]
    OR?: cc_illnessWhereInput[]
    NOT?: cc_illnessWhereInput | cc_illnessWhereInput[]
    illness_name?: StringFilter<"cc_illness"> | string
    illness_description?: StringNullableFilter<"cc_illness"> | string | null
    cc_user_illness?: Cc_user_illnessListRelationFilter
  }, "illness_id">

  export type cc_illnessOrderByWithAggregationInput = {
    illness_id?: SortOrder
    illness_name?: SortOrder
    illness_description?: SortOrderInput | SortOrder
    _count?: cc_illnessCountOrderByAggregateInput
    _avg?: cc_illnessAvgOrderByAggregateInput
    _max?: cc_illnessMaxOrderByAggregateInput
    _min?: cc_illnessMinOrderByAggregateInput
    _sum?: cc_illnessSumOrderByAggregateInput
  }

  export type cc_illnessScalarWhereWithAggregatesInput = {
    AND?: cc_illnessScalarWhereWithAggregatesInput | cc_illnessScalarWhereWithAggregatesInput[]
    OR?: cc_illnessScalarWhereWithAggregatesInput[]
    NOT?: cc_illnessScalarWhereWithAggregatesInput | cc_illnessScalarWhereWithAggregatesInput[]
    illness_id?: IntWithAggregatesFilter<"cc_illness"> | number
    illness_name?: StringWithAggregatesFilter<"cc_illness"> | string
    illness_description?: StringNullableWithAggregatesFilter<"cc_illness"> | string | null
  }

  export type cc_nutrientWhereInput = {
    AND?: cc_nutrientWhereInput | cc_nutrientWhereInput[]
    OR?: cc_nutrientWhereInput[]
    NOT?: cc_nutrientWhereInput | cc_nutrientWhereInput[]
    nutrient_id?: IntFilter<"cc_nutrient"> | number
    nutrient_name?: StringFilter<"cc_nutrient"> | string
    nutrient_description?: StringNullableFilter<"cc_nutrient"> | string | null
    cc_food_nutrient?: Cc_food_nutrientListRelationFilter
  }

  export type cc_nutrientOrderByWithRelationInput = {
    nutrient_id?: SortOrder
    nutrient_name?: SortOrder
    nutrient_description?: SortOrderInput | SortOrder
    cc_food_nutrient?: cc_food_nutrientOrderByRelationAggregateInput
  }

  export type cc_nutrientWhereUniqueInput = Prisma.AtLeast<{
    nutrient_id?: number
    AND?: cc_nutrientWhereInput | cc_nutrientWhereInput[]
    OR?: cc_nutrientWhereInput[]
    NOT?: cc_nutrientWhereInput | cc_nutrientWhereInput[]
    nutrient_name?: StringFilter<"cc_nutrient"> | string
    nutrient_description?: StringNullableFilter<"cc_nutrient"> | string | null
    cc_food_nutrient?: Cc_food_nutrientListRelationFilter
  }, "nutrient_id">

  export type cc_nutrientOrderByWithAggregationInput = {
    nutrient_id?: SortOrder
    nutrient_name?: SortOrder
    nutrient_description?: SortOrderInput | SortOrder
    _count?: cc_nutrientCountOrderByAggregateInput
    _avg?: cc_nutrientAvgOrderByAggregateInput
    _max?: cc_nutrientMaxOrderByAggregateInput
    _min?: cc_nutrientMinOrderByAggregateInput
    _sum?: cc_nutrientSumOrderByAggregateInput
  }

  export type cc_nutrientScalarWhereWithAggregatesInput = {
    AND?: cc_nutrientScalarWhereWithAggregatesInput | cc_nutrientScalarWhereWithAggregatesInput[]
    OR?: cc_nutrientScalarWhereWithAggregatesInput[]
    NOT?: cc_nutrientScalarWhereWithAggregatesInput | cc_nutrientScalarWhereWithAggregatesInput[]
    nutrient_id?: IntWithAggregatesFilter<"cc_nutrient"> | number
    nutrient_name?: StringWithAggregatesFilter<"cc_nutrient"> | string
    nutrient_description?: StringNullableWithAggregatesFilter<"cc_nutrient"> | string | null
  }

  export type cc_userWhereInput = {
    AND?: cc_userWhereInput | cc_userWhereInput[]
    OR?: cc_userWhereInput[]
    NOT?: cc_userWhereInput | cc_userWhereInput[]
    user_id?: IntFilter<"cc_user"> | number
    email?: StringFilter<"cc_user"> | string
    password?: StringFilter<"cc_user"> | string
    cc_user_illness?: Cc_user_illnessListRelationFilter
  }

  export type cc_userOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cc_user_illness?: cc_user_illnessOrderByRelationAggregateInput
  }

  export type cc_userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: cc_userWhereInput | cc_userWhereInput[]
    OR?: cc_userWhereInput[]
    NOT?: cc_userWhereInput | cc_userWhereInput[]
    email?: StringFilter<"cc_user"> | string
    password?: StringFilter<"cc_user"> | string
    cc_user_illness?: Cc_user_illnessListRelationFilter
  }, "user_id">

  export type cc_userOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: cc_userCountOrderByAggregateInput
    _avg?: cc_userAvgOrderByAggregateInput
    _max?: cc_userMaxOrderByAggregateInput
    _min?: cc_userMinOrderByAggregateInput
    _sum?: cc_userSumOrderByAggregateInput
  }

  export type cc_userScalarWhereWithAggregatesInput = {
    AND?: cc_userScalarWhereWithAggregatesInput | cc_userScalarWhereWithAggregatesInput[]
    OR?: cc_userScalarWhereWithAggregatesInput[]
    NOT?: cc_userScalarWhereWithAggregatesInput | cc_userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"cc_user"> | number
    email?: StringWithAggregatesFilter<"cc_user"> | string
    password?: StringWithAggregatesFilter<"cc_user"> | string
  }

  export type cc_user_illnessWhereInput = {
    AND?: cc_user_illnessWhereInput | cc_user_illnessWhereInput[]
    OR?: cc_user_illnessWhereInput[]
    NOT?: cc_user_illnessWhereInput | cc_user_illnessWhereInput[]
    user_id?: IntFilter<"cc_user_illness"> | number
    illness_id?: IntFilter<"cc_user_illness"> | number
    cc_illness?: XOR<Cc_illnessScalarRelationFilter, cc_illnessWhereInput>
    cc_user?: XOR<Cc_userScalarRelationFilter, cc_userWhereInput>
  }

  export type cc_user_illnessOrderByWithRelationInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
    cc_illness?: cc_illnessOrderByWithRelationInput
    cc_user?: cc_userOrderByWithRelationInput
  }

  export type cc_user_illnessWhereUniqueInput = Prisma.AtLeast<{
    user_id_illness_id?: cc_user_illnessUser_idIllness_idCompoundUniqueInput
    AND?: cc_user_illnessWhereInput | cc_user_illnessWhereInput[]
    OR?: cc_user_illnessWhereInput[]
    NOT?: cc_user_illnessWhereInput | cc_user_illnessWhereInput[]
    user_id?: IntFilter<"cc_user_illness"> | number
    illness_id?: IntFilter<"cc_user_illness"> | number
    cc_illness?: XOR<Cc_illnessScalarRelationFilter, cc_illnessWhereInput>
    cc_user?: XOR<Cc_userScalarRelationFilter, cc_userWhereInput>
  }, "user_id_illness_id">

  export type cc_user_illnessOrderByWithAggregationInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
    _count?: cc_user_illnessCountOrderByAggregateInput
    _avg?: cc_user_illnessAvgOrderByAggregateInput
    _max?: cc_user_illnessMaxOrderByAggregateInput
    _min?: cc_user_illnessMinOrderByAggregateInput
    _sum?: cc_user_illnessSumOrderByAggregateInput
  }

  export type cc_user_illnessScalarWhereWithAggregatesInput = {
    AND?: cc_user_illnessScalarWhereWithAggregatesInput | cc_user_illnessScalarWhereWithAggregatesInput[]
    OR?: cc_user_illnessScalarWhereWithAggregatesInput[]
    NOT?: cc_user_illnessScalarWhereWithAggregatesInput | cc_user_illnessScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"cc_user_illness"> | number
    illness_id?: IntWithAggregatesFilter<"cc_user_illness"> | number
  }

  export type cc_foodCreateInput = {
    food_name: string
    food_description?: string | null
    cc_food_nutrient?: cc_food_nutrientCreateNestedManyWithoutCc_foodInput
  }

  export type cc_foodUncheckedCreateInput = {
    food_id?: number
    food_name: string
    food_description?: string | null
    cc_food_nutrient?: cc_food_nutrientUncheckedCreateNestedManyWithoutCc_foodInput
  }

  export type cc_foodUpdateInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_food_nutrient?: cc_food_nutrientUpdateManyWithoutCc_foodNestedInput
  }

  export type cc_foodUncheckedUpdateInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_food_nutrient?: cc_food_nutrientUncheckedUpdateManyWithoutCc_foodNestedInput
  }

  export type cc_foodCreateManyInput = {
    food_id?: number
    food_name: string
    food_description?: string | null
  }

  export type cc_foodUpdateManyMutationInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_foodUncheckedUpdateManyInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_food_nutrientCreateInput = {
    cc_food: cc_foodCreateNestedOneWithoutCc_food_nutrientInput
    cc_nutrient: cc_nutrientCreateNestedOneWithoutCc_food_nutrientInput
  }

  export type cc_food_nutrientUncheckedCreateInput = {
    food_id: number
    nutrient_id: number
  }

  export type cc_food_nutrientUpdateInput = {
    cc_food?: cc_foodUpdateOneRequiredWithoutCc_food_nutrientNestedInput
    cc_nutrient?: cc_nutrientUpdateOneRequiredWithoutCc_food_nutrientNestedInput
  }

  export type cc_food_nutrientUncheckedUpdateInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    nutrient_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_food_nutrientCreateManyInput = {
    food_id: number
    nutrient_id: number
  }

  export type cc_food_nutrientUpdateManyMutationInput = {

  }

  export type cc_food_nutrientUncheckedUpdateManyInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    nutrient_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_illnessCreateInput = {
    illness_name: string
    illness_description?: string | null
    cc_user_illness?: cc_user_illnessCreateNestedManyWithoutCc_illnessInput
  }

  export type cc_illnessUncheckedCreateInput = {
    illness_id?: number
    illness_name: string
    illness_description?: string | null
    cc_user_illness?: cc_user_illnessUncheckedCreateNestedManyWithoutCc_illnessInput
  }

  export type cc_illnessUpdateInput = {
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_user_illness?: cc_user_illnessUpdateManyWithoutCc_illnessNestedInput
  }

  export type cc_illnessUncheckedUpdateInput = {
    illness_id?: IntFieldUpdateOperationsInput | number
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_user_illness?: cc_user_illnessUncheckedUpdateManyWithoutCc_illnessNestedInput
  }

  export type cc_illnessCreateManyInput = {
    illness_id?: number
    illness_name: string
    illness_description?: string | null
  }

  export type cc_illnessUpdateManyMutationInput = {
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_illnessUncheckedUpdateManyInput = {
    illness_id?: IntFieldUpdateOperationsInput | number
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_nutrientCreateInput = {
    nutrient_name: string
    nutrient_description?: string | null
    cc_food_nutrient?: cc_food_nutrientCreateNestedManyWithoutCc_nutrientInput
  }

  export type cc_nutrientUncheckedCreateInput = {
    nutrient_id?: number
    nutrient_name: string
    nutrient_description?: string | null
    cc_food_nutrient?: cc_food_nutrientUncheckedCreateNestedManyWithoutCc_nutrientInput
  }

  export type cc_nutrientUpdateInput = {
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_food_nutrient?: cc_food_nutrientUpdateManyWithoutCc_nutrientNestedInput
  }

  export type cc_nutrientUncheckedUpdateInput = {
    nutrient_id?: IntFieldUpdateOperationsInput | number
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
    cc_food_nutrient?: cc_food_nutrientUncheckedUpdateManyWithoutCc_nutrientNestedInput
  }

  export type cc_nutrientCreateManyInput = {
    nutrient_id?: number
    nutrient_name: string
    nutrient_description?: string | null
  }

  export type cc_nutrientUpdateManyMutationInput = {
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_nutrientUncheckedUpdateManyInput = {
    nutrient_id?: IntFieldUpdateOperationsInput | number
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_userCreateInput = {
    email: string
    password: string
    cc_user_illness?: cc_user_illnessCreateNestedManyWithoutCc_userInput
  }

  export type cc_userUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    cc_user_illness?: cc_user_illnessUncheckedCreateNestedManyWithoutCc_userInput
  }

  export type cc_userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cc_user_illness?: cc_user_illnessUpdateManyWithoutCc_userNestedInput
  }

  export type cc_userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cc_user_illness?: cc_user_illnessUncheckedUpdateManyWithoutCc_userNestedInput
  }

  export type cc_userCreateManyInput = {
    user_id?: number
    email: string
    password: string
  }

  export type cc_userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type cc_userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type cc_user_illnessCreateInput = {
    cc_illness: cc_illnessCreateNestedOneWithoutCc_user_illnessInput
    cc_user: cc_userCreateNestedOneWithoutCc_user_illnessInput
  }

  export type cc_user_illnessUncheckedCreateInput = {
    user_id: number
    illness_id: number
  }

  export type cc_user_illnessUpdateInput = {
    cc_illness?: cc_illnessUpdateOneRequiredWithoutCc_user_illnessNestedInput
    cc_user?: cc_userUpdateOneRequiredWithoutCc_user_illnessNestedInput
  }

  export type cc_user_illnessUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    illness_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_user_illnessCreateManyInput = {
    user_id: number
    illness_id: number
  }

  export type cc_user_illnessUpdateManyMutationInput = {

  }

  export type cc_user_illnessUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    illness_id?: IntFieldUpdateOperationsInput | number
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

  export type Cc_food_nutrientListRelationFilter = {
    every?: cc_food_nutrientWhereInput
    some?: cc_food_nutrientWhereInput
    none?: cc_food_nutrientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cc_food_nutrientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cc_foodCountOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    food_description?: SortOrder
  }

  export type cc_foodAvgOrderByAggregateInput = {
    food_id?: SortOrder
  }

  export type cc_foodMaxOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    food_description?: SortOrder
  }

  export type cc_foodMinOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    food_description?: SortOrder
  }

  export type cc_foodSumOrderByAggregateInput = {
    food_id?: SortOrder
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

  export type Cc_foodScalarRelationFilter = {
    is?: cc_foodWhereInput
    isNot?: cc_foodWhereInput
  }

  export type Cc_nutrientScalarRelationFilter = {
    is?: cc_nutrientWhereInput
    isNot?: cc_nutrientWhereInput
  }

  export type cc_food_nutrientFood_idNutrient_idCompoundUniqueInput = {
    food_id: number
    nutrient_id: number
  }

  export type cc_food_nutrientCountOrderByAggregateInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
  }

  export type cc_food_nutrientAvgOrderByAggregateInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
  }

  export type cc_food_nutrientMaxOrderByAggregateInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
  }

  export type cc_food_nutrientMinOrderByAggregateInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
  }

  export type cc_food_nutrientSumOrderByAggregateInput = {
    food_id?: SortOrder
    nutrient_id?: SortOrder
  }

  export type Cc_user_illnessListRelationFilter = {
    every?: cc_user_illnessWhereInput
    some?: cc_user_illnessWhereInput
    none?: cc_user_illnessWhereInput
  }

  export type cc_user_illnessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cc_illnessCountOrderByAggregateInput = {
    illness_id?: SortOrder
    illness_name?: SortOrder
    illness_description?: SortOrder
  }

  export type cc_illnessAvgOrderByAggregateInput = {
    illness_id?: SortOrder
  }

  export type cc_illnessMaxOrderByAggregateInput = {
    illness_id?: SortOrder
    illness_name?: SortOrder
    illness_description?: SortOrder
  }

  export type cc_illnessMinOrderByAggregateInput = {
    illness_id?: SortOrder
    illness_name?: SortOrder
    illness_description?: SortOrder
  }

  export type cc_illnessSumOrderByAggregateInput = {
    illness_id?: SortOrder
  }

  export type cc_nutrientCountOrderByAggregateInput = {
    nutrient_id?: SortOrder
    nutrient_name?: SortOrder
    nutrient_description?: SortOrder
  }

  export type cc_nutrientAvgOrderByAggregateInput = {
    nutrient_id?: SortOrder
  }

  export type cc_nutrientMaxOrderByAggregateInput = {
    nutrient_id?: SortOrder
    nutrient_name?: SortOrder
    nutrient_description?: SortOrder
  }

  export type cc_nutrientMinOrderByAggregateInput = {
    nutrient_id?: SortOrder
    nutrient_name?: SortOrder
    nutrient_description?: SortOrder
  }

  export type cc_nutrientSumOrderByAggregateInput = {
    nutrient_id?: SortOrder
  }

  export type cc_userCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type cc_userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type cc_userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type cc_userMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type cc_userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Cc_illnessScalarRelationFilter = {
    is?: cc_illnessWhereInput
    isNot?: cc_illnessWhereInput
  }

  export type Cc_userScalarRelationFilter = {
    is?: cc_userWhereInput
    isNot?: cc_userWhereInput
  }

  export type cc_user_illnessUser_idIllness_idCompoundUniqueInput = {
    user_id: number
    illness_id: number
  }

  export type cc_user_illnessCountOrderByAggregateInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
  }

  export type cc_user_illnessAvgOrderByAggregateInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
  }

  export type cc_user_illnessMaxOrderByAggregateInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
  }

  export type cc_user_illnessMinOrderByAggregateInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
  }

  export type cc_user_illnessSumOrderByAggregateInput = {
    user_id?: SortOrder
    illness_id?: SortOrder
  }

  export type cc_food_nutrientCreateNestedManyWithoutCc_foodInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput> | cc_food_nutrientCreateWithoutCc_foodInput[] | cc_food_nutrientUncheckedCreateWithoutCc_foodInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_foodInput | cc_food_nutrientCreateOrConnectWithoutCc_foodInput[]
    createMany?: cc_food_nutrientCreateManyCc_foodInputEnvelope
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
  }

  export type cc_food_nutrientUncheckedCreateNestedManyWithoutCc_foodInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput> | cc_food_nutrientCreateWithoutCc_foodInput[] | cc_food_nutrientUncheckedCreateWithoutCc_foodInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_foodInput | cc_food_nutrientCreateOrConnectWithoutCc_foodInput[]
    createMany?: cc_food_nutrientCreateManyCc_foodInputEnvelope
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cc_food_nutrientUpdateManyWithoutCc_foodNestedInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput> | cc_food_nutrientCreateWithoutCc_foodInput[] | cc_food_nutrientUncheckedCreateWithoutCc_foodInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_foodInput | cc_food_nutrientCreateOrConnectWithoutCc_foodInput[]
    upsert?: cc_food_nutrientUpsertWithWhereUniqueWithoutCc_foodInput | cc_food_nutrientUpsertWithWhereUniqueWithoutCc_foodInput[]
    createMany?: cc_food_nutrientCreateManyCc_foodInputEnvelope
    set?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    disconnect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    delete?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    update?: cc_food_nutrientUpdateWithWhereUniqueWithoutCc_foodInput | cc_food_nutrientUpdateWithWhereUniqueWithoutCc_foodInput[]
    updateMany?: cc_food_nutrientUpdateManyWithWhereWithoutCc_foodInput | cc_food_nutrientUpdateManyWithWhereWithoutCc_foodInput[]
    deleteMany?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cc_food_nutrientUncheckedUpdateManyWithoutCc_foodNestedInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput> | cc_food_nutrientCreateWithoutCc_foodInput[] | cc_food_nutrientUncheckedCreateWithoutCc_foodInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_foodInput | cc_food_nutrientCreateOrConnectWithoutCc_foodInput[]
    upsert?: cc_food_nutrientUpsertWithWhereUniqueWithoutCc_foodInput | cc_food_nutrientUpsertWithWhereUniqueWithoutCc_foodInput[]
    createMany?: cc_food_nutrientCreateManyCc_foodInputEnvelope
    set?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    disconnect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    delete?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    update?: cc_food_nutrientUpdateWithWhereUniqueWithoutCc_foodInput | cc_food_nutrientUpdateWithWhereUniqueWithoutCc_foodInput[]
    updateMany?: cc_food_nutrientUpdateManyWithWhereWithoutCc_foodInput | cc_food_nutrientUpdateManyWithWhereWithoutCc_foodInput[]
    deleteMany?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
  }

  export type cc_foodCreateNestedOneWithoutCc_food_nutrientInput = {
    create?: XOR<cc_foodCreateWithoutCc_food_nutrientInput, cc_foodUncheckedCreateWithoutCc_food_nutrientInput>
    connectOrCreate?: cc_foodCreateOrConnectWithoutCc_food_nutrientInput
    connect?: cc_foodWhereUniqueInput
  }

  export type cc_nutrientCreateNestedOneWithoutCc_food_nutrientInput = {
    create?: XOR<cc_nutrientCreateWithoutCc_food_nutrientInput, cc_nutrientUncheckedCreateWithoutCc_food_nutrientInput>
    connectOrCreate?: cc_nutrientCreateOrConnectWithoutCc_food_nutrientInput
    connect?: cc_nutrientWhereUniqueInput
  }

  export type cc_foodUpdateOneRequiredWithoutCc_food_nutrientNestedInput = {
    create?: XOR<cc_foodCreateWithoutCc_food_nutrientInput, cc_foodUncheckedCreateWithoutCc_food_nutrientInput>
    connectOrCreate?: cc_foodCreateOrConnectWithoutCc_food_nutrientInput
    upsert?: cc_foodUpsertWithoutCc_food_nutrientInput
    connect?: cc_foodWhereUniqueInput
    update?: XOR<XOR<cc_foodUpdateToOneWithWhereWithoutCc_food_nutrientInput, cc_foodUpdateWithoutCc_food_nutrientInput>, cc_foodUncheckedUpdateWithoutCc_food_nutrientInput>
  }

  export type cc_nutrientUpdateOneRequiredWithoutCc_food_nutrientNestedInput = {
    create?: XOR<cc_nutrientCreateWithoutCc_food_nutrientInput, cc_nutrientUncheckedCreateWithoutCc_food_nutrientInput>
    connectOrCreate?: cc_nutrientCreateOrConnectWithoutCc_food_nutrientInput
    upsert?: cc_nutrientUpsertWithoutCc_food_nutrientInput
    connect?: cc_nutrientWhereUniqueInput
    update?: XOR<XOR<cc_nutrientUpdateToOneWithWhereWithoutCc_food_nutrientInput, cc_nutrientUpdateWithoutCc_food_nutrientInput>, cc_nutrientUncheckedUpdateWithoutCc_food_nutrientInput>
  }

  export type cc_user_illnessCreateNestedManyWithoutCc_illnessInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput> | cc_user_illnessCreateWithoutCc_illnessInput[] | cc_user_illnessUncheckedCreateWithoutCc_illnessInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_illnessInput | cc_user_illnessCreateOrConnectWithoutCc_illnessInput[]
    createMany?: cc_user_illnessCreateManyCc_illnessInputEnvelope
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
  }

  export type cc_user_illnessUncheckedCreateNestedManyWithoutCc_illnessInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput> | cc_user_illnessCreateWithoutCc_illnessInput[] | cc_user_illnessUncheckedCreateWithoutCc_illnessInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_illnessInput | cc_user_illnessCreateOrConnectWithoutCc_illnessInput[]
    createMany?: cc_user_illnessCreateManyCc_illnessInputEnvelope
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
  }

  export type cc_user_illnessUpdateManyWithoutCc_illnessNestedInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput> | cc_user_illnessCreateWithoutCc_illnessInput[] | cc_user_illnessUncheckedCreateWithoutCc_illnessInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_illnessInput | cc_user_illnessCreateOrConnectWithoutCc_illnessInput[]
    upsert?: cc_user_illnessUpsertWithWhereUniqueWithoutCc_illnessInput | cc_user_illnessUpsertWithWhereUniqueWithoutCc_illnessInput[]
    createMany?: cc_user_illnessCreateManyCc_illnessInputEnvelope
    set?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    disconnect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    delete?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    update?: cc_user_illnessUpdateWithWhereUniqueWithoutCc_illnessInput | cc_user_illnessUpdateWithWhereUniqueWithoutCc_illnessInput[]
    updateMany?: cc_user_illnessUpdateManyWithWhereWithoutCc_illnessInput | cc_user_illnessUpdateManyWithWhereWithoutCc_illnessInput[]
    deleteMany?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
  }

  export type cc_user_illnessUncheckedUpdateManyWithoutCc_illnessNestedInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput> | cc_user_illnessCreateWithoutCc_illnessInput[] | cc_user_illnessUncheckedCreateWithoutCc_illnessInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_illnessInput | cc_user_illnessCreateOrConnectWithoutCc_illnessInput[]
    upsert?: cc_user_illnessUpsertWithWhereUniqueWithoutCc_illnessInput | cc_user_illnessUpsertWithWhereUniqueWithoutCc_illnessInput[]
    createMany?: cc_user_illnessCreateManyCc_illnessInputEnvelope
    set?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    disconnect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    delete?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    update?: cc_user_illnessUpdateWithWhereUniqueWithoutCc_illnessInput | cc_user_illnessUpdateWithWhereUniqueWithoutCc_illnessInput[]
    updateMany?: cc_user_illnessUpdateManyWithWhereWithoutCc_illnessInput | cc_user_illnessUpdateManyWithWhereWithoutCc_illnessInput[]
    deleteMany?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
  }

  export type cc_food_nutrientCreateNestedManyWithoutCc_nutrientInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput> | cc_food_nutrientCreateWithoutCc_nutrientInput[] | cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput | cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput[]
    createMany?: cc_food_nutrientCreateManyCc_nutrientInputEnvelope
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
  }

  export type cc_food_nutrientUncheckedCreateNestedManyWithoutCc_nutrientInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput> | cc_food_nutrientCreateWithoutCc_nutrientInput[] | cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput | cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput[]
    createMany?: cc_food_nutrientCreateManyCc_nutrientInputEnvelope
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
  }

  export type cc_food_nutrientUpdateManyWithoutCc_nutrientNestedInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput> | cc_food_nutrientCreateWithoutCc_nutrientInput[] | cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput | cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput[]
    upsert?: cc_food_nutrientUpsertWithWhereUniqueWithoutCc_nutrientInput | cc_food_nutrientUpsertWithWhereUniqueWithoutCc_nutrientInput[]
    createMany?: cc_food_nutrientCreateManyCc_nutrientInputEnvelope
    set?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    disconnect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    delete?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    update?: cc_food_nutrientUpdateWithWhereUniqueWithoutCc_nutrientInput | cc_food_nutrientUpdateWithWhereUniqueWithoutCc_nutrientInput[]
    updateMany?: cc_food_nutrientUpdateManyWithWhereWithoutCc_nutrientInput | cc_food_nutrientUpdateManyWithWhereWithoutCc_nutrientInput[]
    deleteMany?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
  }

  export type cc_food_nutrientUncheckedUpdateManyWithoutCc_nutrientNestedInput = {
    create?: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput> | cc_food_nutrientCreateWithoutCc_nutrientInput[] | cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput[]
    connectOrCreate?: cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput | cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput[]
    upsert?: cc_food_nutrientUpsertWithWhereUniqueWithoutCc_nutrientInput | cc_food_nutrientUpsertWithWhereUniqueWithoutCc_nutrientInput[]
    createMany?: cc_food_nutrientCreateManyCc_nutrientInputEnvelope
    set?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    disconnect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    delete?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    connect?: cc_food_nutrientWhereUniqueInput | cc_food_nutrientWhereUniqueInput[]
    update?: cc_food_nutrientUpdateWithWhereUniqueWithoutCc_nutrientInput | cc_food_nutrientUpdateWithWhereUniqueWithoutCc_nutrientInput[]
    updateMany?: cc_food_nutrientUpdateManyWithWhereWithoutCc_nutrientInput | cc_food_nutrientUpdateManyWithWhereWithoutCc_nutrientInput[]
    deleteMany?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
  }

  export type cc_user_illnessCreateNestedManyWithoutCc_userInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput> | cc_user_illnessCreateWithoutCc_userInput[] | cc_user_illnessUncheckedCreateWithoutCc_userInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_userInput | cc_user_illnessCreateOrConnectWithoutCc_userInput[]
    createMany?: cc_user_illnessCreateManyCc_userInputEnvelope
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
  }

  export type cc_user_illnessUncheckedCreateNestedManyWithoutCc_userInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput> | cc_user_illnessCreateWithoutCc_userInput[] | cc_user_illnessUncheckedCreateWithoutCc_userInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_userInput | cc_user_illnessCreateOrConnectWithoutCc_userInput[]
    createMany?: cc_user_illnessCreateManyCc_userInputEnvelope
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
  }

  export type cc_user_illnessUpdateManyWithoutCc_userNestedInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput> | cc_user_illnessCreateWithoutCc_userInput[] | cc_user_illnessUncheckedCreateWithoutCc_userInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_userInput | cc_user_illnessCreateOrConnectWithoutCc_userInput[]
    upsert?: cc_user_illnessUpsertWithWhereUniqueWithoutCc_userInput | cc_user_illnessUpsertWithWhereUniqueWithoutCc_userInput[]
    createMany?: cc_user_illnessCreateManyCc_userInputEnvelope
    set?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    disconnect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    delete?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    update?: cc_user_illnessUpdateWithWhereUniqueWithoutCc_userInput | cc_user_illnessUpdateWithWhereUniqueWithoutCc_userInput[]
    updateMany?: cc_user_illnessUpdateManyWithWhereWithoutCc_userInput | cc_user_illnessUpdateManyWithWhereWithoutCc_userInput[]
    deleteMany?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
  }

  export type cc_user_illnessUncheckedUpdateManyWithoutCc_userNestedInput = {
    create?: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput> | cc_user_illnessCreateWithoutCc_userInput[] | cc_user_illnessUncheckedCreateWithoutCc_userInput[]
    connectOrCreate?: cc_user_illnessCreateOrConnectWithoutCc_userInput | cc_user_illnessCreateOrConnectWithoutCc_userInput[]
    upsert?: cc_user_illnessUpsertWithWhereUniqueWithoutCc_userInput | cc_user_illnessUpsertWithWhereUniqueWithoutCc_userInput[]
    createMany?: cc_user_illnessCreateManyCc_userInputEnvelope
    set?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    disconnect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    delete?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    connect?: cc_user_illnessWhereUniqueInput | cc_user_illnessWhereUniqueInput[]
    update?: cc_user_illnessUpdateWithWhereUniqueWithoutCc_userInput | cc_user_illnessUpdateWithWhereUniqueWithoutCc_userInput[]
    updateMany?: cc_user_illnessUpdateManyWithWhereWithoutCc_userInput | cc_user_illnessUpdateManyWithWhereWithoutCc_userInput[]
    deleteMany?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
  }

  export type cc_illnessCreateNestedOneWithoutCc_user_illnessInput = {
    create?: XOR<cc_illnessCreateWithoutCc_user_illnessInput, cc_illnessUncheckedCreateWithoutCc_user_illnessInput>
    connectOrCreate?: cc_illnessCreateOrConnectWithoutCc_user_illnessInput
    connect?: cc_illnessWhereUniqueInput
  }

  export type cc_userCreateNestedOneWithoutCc_user_illnessInput = {
    create?: XOR<cc_userCreateWithoutCc_user_illnessInput, cc_userUncheckedCreateWithoutCc_user_illnessInput>
    connectOrCreate?: cc_userCreateOrConnectWithoutCc_user_illnessInput
    connect?: cc_userWhereUniqueInput
  }

  export type cc_illnessUpdateOneRequiredWithoutCc_user_illnessNestedInput = {
    create?: XOR<cc_illnessCreateWithoutCc_user_illnessInput, cc_illnessUncheckedCreateWithoutCc_user_illnessInput>
    connectOrCreate?: cc_illnessCreateOrConnectWithoutCc_user_illnessInput
    upsert?: cc_illnessUpsertWithoutCc_user_illnessInput
    connect?: cc_illnessWhereUniqueInput
    update?: XOR<XOR<cc_illnessUpdateToOneWithWhereWithoutCc_user_illnessInput, cc_illnessUpdateWithoutCc_user_illnessInput>, cc_illnessUncheckedUpdateWithoutCc_user_illnessInput>
  }

  export type cc_userUpdateOneRequiredWithoutCc_user_illnessNestedInput = {
    create?: XOR<cc_userCreateWithoutCc_user_illnessInput, cc_userUncheckedCreateWithoutCc_user_illnessInput>
    connectOrCreate?: cc_userCreateOrConnectWithoutCc_user_illnessInput
    upsert?: cc_userUpsertWithoutCc_user_illnessInput
    connect?: cc_userWhereUniqueInput
    update?: XOR<XOR<cc_userUpdateToOneWithWhereWithoutCc_user_illnessInput, cc_userUpdateWithoutCc_user_illnessInput>, cc_userUncheckedUpdateWithoutCc_user_illnessInput>
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

  export type cc_food_nutrientCreateWithoutCc_foodInput = {
    cc_nutrient: cc_nutrientCreateNestedOneWithoutCc_food_nutrientInput
  }

  export type cc_food_nutrientUncheckedCreateWithoutCc_foodInput = {
    nutrient_id: number
  }

  export type cc_food_nutrientCreateOrConnectWithoutCc_foodInput = {
    where: cc_food_nutrientWhereUniqueInput
    create: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput>
  }

  export type cc_food_nutrientCreateManyCc_foodInputEnvelope = {
    data: cc_food_nutrientCreateManyCc_foodInput | cc_food_nutrientCreateManyCc_foodInput[]
    skipDuplicates?: boolean
  }

  export type cc_food_nutrientUpsertWithWhereUniqueWithoutCc_foodInput = {
    where: cc_food_nutrientWhereUniqueInput
    update: XOR<cc_food_nutrientUpdateWithoutCc_foodInput, cc_food_nutrientUncheckedUpdateWithoutCc_foodInput>
    create: XOR<cc_food_nutrientCreateWithoutCc_foodInput, cc_food_nutrientUncheckedCreateWithoutCc_foodInput>
  }

  export type cc_food_nutrientUpdateWithWhereUniqueWithoutCc_foodInput = {
    where: cc_food_nutrientWhereUniqueInput
    data: XOR<cc_food_nutrientUpdateWithoutCc_foodInput, cc_food_nutrientUncheckedUpdateWithoutCc_foodInput>
  }

  export type cc_food_nutrientUpdateManyWithWhereWithoutCc_foodInput = {
    where: cc_food_nutrientScalarWhereInput
    data: XOR<cc_food_nutrientUpdateManyMutationInput, cc_food_nutrientUncheckedUpdateManyWithoutCc_foodInput>
  }

  export type cc_food_nutrientScalarWhereInput = {
    AND?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
    OR?: cc_food_nutrientScalarWhereInput[]
    NOT?: cc_food_nutrientScalarWhereInput | cc_food_nutrientScalarWhereInput[]
    food_id?: IntFilter<"cc_food_nutrient"> | number
    nutrient_id?: IntFilter<"cc_food_nutrient"> | number
  }

  export type cc_foodCreateWithoutCc_food_nutrientInput = {
    food_name: string
    food_description?: string | null
  }

  export type cc_foodUncheckedCreateWithoutCc_food_nutrientInput = {
    food_id?: number
    food_name: string
    food_description?: string | null
  }

  export type cc_foodCreateOrConnectWithoutCc_food_nutrientInput = {
    where: cc_foodWhereUniqueInput
    create: XOR<cc_foodCreateWithoutCc_food_nutrientInput, cc_foodUncheckedCreateWithoutCc_food_nutrientInput>
  }

  export type cc_nutrientCreateWithoutCc_food_nutrientInput = {
    nutrient_name: string
    nutrient_description?: string | null
  }

  export type cc_nutrientUncheckedCreateWithoutCc_food_nutrientInput = {
    nutrient_id?: number
    nutrient_name: string
    nutrient_description?: string | null
  }

  export type cc_nutrientCreateOrConnectWithoutCc_food_nutrientInput = {
    where: cc_nutrientWhereUniqueInput
    create: XOR<cc_nutrientCreateWithoutCc_food_nutrientInput, cc_nutrientUncheckedCreateWithoutCc_food_nutrientInput>
  }

  export type cc_foodUpsertWithoutCc_food_nutrientInput = {
    update: XOR<cc_foodUpdateWithoutCc_food_nutrientInput, cc_foodUncheckedUpdateWithoutCc_food_nutrientInput>
    create: XOR<cc_foodCreateWithoutCc_food_nutrientInput, cc_foodUncheckedCreateWithoutCc_food_nutrientInput>
    where?: cc_foodWhereInput
  }

  export type cc_foodUpdateToOneWithWhereWithoutCc_food_nutrientInput = {
    where?: cc_foodWhereInput
    data: XOR<cc_foodUpdateWithoutCc_food_nutrientInput, cc_foodUncheckedUpdateWithoutCc_food_nutrientInput>
  }

  export type cc_foodUpdateWithoutCc_food_nutrientInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_foodUncheckedUpdateWithoutCc_food_nutrientInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    food_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_nutrientUpsertWithoutCc_food_nutrientInput = {
    update: XOR<cc_nutrientUpdateWithoutCc_food_nutrientInput, cc_nutrientUncheckedUpdateWithoutCc_food_nutrientInput>
    create: XOR<cc_nutrientCreateWithoutCc_food_nutrientInput, cc_nutrientUncheckedCreateWithoutCc_food_nutrientInput>
    where?: cc_nutrientWhereInput
  }

  export type cc_nutrientUpdateToOneWithWhereWithoutCc_food_nutrientInput = {
    where?: cc_nutrientWhereInput
    data: XOR<cc_nutrientUpdateWithoutCc_food_nutrientInput, cc_nutrientUncheckedUpdateWithoutCc_food_nutrientInput>
  }

  export type cc_nutrientUpdateWithoutCc_food_nutrientInput = {
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_nutrientUncheckedUpdateWithoutCc_food_nutrientInput = {
    nutrient_id?: IntFieldUpdateOperationsInput | number
    nutrient_name?: StringFieldUpdateOperationsInput | string
    nutrient_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_user_illnessCreateWithoutCc_illnessInput = {
    cc_user: cc_userCreateNestedOneWithoutCc_user_illnessInput
  }

  export type cc_user_illnessUncheckedCreateWithoutCc_illnessInput = {
    user_id: number
  }

  export type cc_user_illnessCreateOrConnectWithoutCc_illnessInput = {
    where: cc_user_illnessWhereUniqueInput
    create: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput>
  }

  export type cc_user_illnessCreateManyCc_illnessInputEnvelope = {
    data: cc_user_illnessCreateManyCc_illnessInput | cc_user_illnessCreateManyCc_illnessInput[]
    skipDuplicates?: boolean
  }

  export type cc_user_illnessUpsertWithWhereUniqueWithoutCc_illnessInput = {
    where: cc_user_illnessWhereUniqueInput
    update: XOR<cc_user_illnessUpdateWithoutCc_illnessInput, cc_user_illnessUncheckedUpdateWithoutCc_illnessInput>
    create: XOR<cc_user_illnessCreateWithoutCc_illnessInput, cc_user_illnessUncheckedCreateWithoutCc_illnessInput>
  }

  export type cc_user_illnessUpdateWithWhereUniqueWithoutCc_illnessInput = {
    where: cc_user_illnessWhereUniqueInput
    data: XOR<cc_user_illnessUpdateWithoutCc_illnessInput, cc_user_illnessUncheckedUpdateWithoutCc_illnessInput>
  }

  export type cc_user_illnessUpdateManyWithWhereWithoutCc_illnessInput = {
    where: cc_user_illnessScalarWhereInput
    data: XOR<cc_user_illnessUpdateManyMutationInput, cc_user_illnessUncheckedUpdateManyWithoutCc_illnessInput>
  }

  export type cc_user_illnessScalarWhereInput = {
    AND?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
    OR?: cc_user_illnessScalarWhereInput[]
    NOT?: cc_user_illnessScalarWhereInput | cc_user_illnessScalarWhereInput[]
    user_id?: IntFilter<"cc_user_illness"> | number
    illness_id?: IntFilter<"cc_user_illness"> | number
  }

  export type cc_food_nutrientCreateWithoutCc_nutrientInput = {
    cc_food: cc_foodCreateNestedOneWithoutCc_food_nutrientInput
  }

  export type cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput = {
    food_id: number
  }

  export type cc_food_nutrientCreateOrConnectWithoutCc_nutrientInput = {
    where: cc_food_nutrientWhereUniqueInput
    create: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput>
  }

  export type cc_food_nutrientCreateManyCc_nutrientInputEnvelope = {
    data: cc_food_nutrientCreateManyCc_nutrientInput | cc_food_nutrientCreateManyCc_nutrientInput[]
    skipDuplicates?: boolean
  }

  export type cc_food_nutrientUpsertWithWhereUniqueWithoutCc_nutrientInput = {
    where: cc_food_nutrientWhereUniqueInput
    update: XOR<cc_food_nutrientUpdateWithoutCc_nutrientInput, cc_food_nutrientUncheckedUpdateWithoutCc_nutrientInput>
    create: XOR<cc_food_nutrientCreateWithoutCc_nutrientInput, cc_food_nutrientUncheckedCreateWithoutCc_nutrientInput>
  }

  export type cc_food_nutrientUpdateWithWhereUniqueWithoutCc_nutrientInput = {
    where: cc_food_nutrientWhereUniqueInput
    data: XOR<cc_food_nutrientUpdateWithoutCc_nutrientInput, cc_food_nutrientUncheckedUpdateWithoutCc_nutrientInput>
  }

  export type cc_food_nutrientUpdateManyWithWhereWithoutCc_nutrientInput = {
    where: cc_food_nutrientScalarWhereInput
    data: XOR<cc_food_nutrientUpdateManyMutationInput, cc_food_nutrientUncheckedUpdateManyWithoutCc_nutrientInput>
  }

  export type cc_user_illnessCreateWithoutCc_userInput = {
    cc_illness: cc_illnessCreateNestedOneWithoutCc_user_illnessInput
  }

  export type cc_user_illnessUncheckedCreateWithoutCc_userInput = {
    illness_id: number
  }

  export type cc_user_illnessCreateOrConnectWithoutCc_userInput = {
    where: cc_user_illnessWhereUniqueInput
    create: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput>
  }

  export type cc_user_illnessCreateManyCc_userInputEnvelope = {
    data: cc_user_illnessCreateManyCc_userInput | cc_user_illnessCreateManyCc_userInput[]
    skipDuplicates?: boolean
  }

  export type cc_user_illnessUpsertWithWhereUniqueWithoutCc_userInput = {
    where: cc_user_illnessWhereUniqueInput
    update: XOR<cc_user_illnessUpdateWithoutCc_userInput, cc_user_illnessUncheckedUpdateWithoutCc_userInput>
    create: XOR<cc_user_illnessCreateWithoutCc_userInput, cc_user_illnessUncheckedCreateWithoutCc_userInput>
  }

  export type cc_user_illnessUpdateWithWhereUniqueWithoutCc_userInput = {
    where: cc_user_illnessWhereUniqueInput
    data: XOR<cc_user_illnessUpdateWithoutCc_userInput, cc_user_illnessUncheckedUpdateWithoutCc_userInput>
  }

  export type cc_user_illnessUpdateManyWithWhereWithoutCc_userInput = {
    where: cc_user_illnessScalarWhereInput
    data: XOR<cc_user_illnessUpdateManyMutationInput, cc_user_illnessUncheckedUpdateManyWithoutCc_userInput>
  }

  export type cc_illnessCreateWithoutCc_user_illnessInput = {
    illness_name: string
    illness_description?: string | null
  }

  export type cc_illnessUncheckedCreateWithoutCc_user_illnessInput = {
    illness_id?: number
    illness_name: string
    illness_description?: string | null
  }

  export type cc_illnessCreateOrConnectWithoutCc_user_illnessInput = {
    where: cc_illnessWhereUniqueInput
    create: XOR<cc_illnessCreateWithoutCc_user_illnessInput, cc_illnessUncheckedCreateWithoutCc_user_illnessInput>
  }

  export type cc_userCreateWithoutCc_user_illnessInput = {
    email: string
    password: string
  }

  export type cc_userUncheckedCreateWithoutCc_user_illnessInput = {
    user_id?: number
    email: string
    password: string
  }

  export type cc_userCreateOrConnectWithoutCc_user_illnessInput = {
    where: cc_userWhereUniqueInput
    create: XOR<cc_userCreateWithoutCc_user_illnessInput, cc_userUncheckedCreateWithoutCc_user_illnessInput>
  }

  export type cc_illnessUpsertWithoutCc_user_illnessInput = {
    update: XOR<cc_illnessUpdateWithoutCc_user_illnessInput, cc_illnessUncheckedUpdateWithoutCc_user_illnessInput>
    create: XOR<cc_illnessCreateWithoutCc_user_illnessInput, cc_illnessUncheckedCreateWithoutCc_user_illnessInput>
    where?: cc_illnessWhereInput
  }

  export type cc_illnessUpdateToOneWithWhereWithoutCc_user_illnessInput = {
    where?: cc_illnessWhereInput
    data: XOR<cc_illnessUpdateWithoutCc_user_illnessInput, cc_illnessUncheckedUpdateWithoutCc_user_illnessInput>
  }

  export type cc_illnessUpdateWithoutCc_user_illnessInput = {
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_illnessUncheckedUpdateWithoutCc_user_illnessInput = {
    illness_id?: IntFieldUpdateOperationsInput | number
    illness_name?: StringFieldUpdateOperationsInput | string
    illness_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_userUpsertWithoutCc_user_illnessInput = {
    update: XOR<cc_userUpdateWithoutCc_user_illnessInput, cc_userUncheckedUpdateWithoutCc_user_illnessInput>
    create: XOR<cc_userCreateWithoutCc_user_illnessInput, cc_userUncheckedCreateWithoutCc_user_illnessInput>
    where?: cc_userWhereInput
  }

  export type cc_userUpdateToOneWithWhereWithoutCc_user_illnessInput = {
    where?: cc_userWhereInput
    data: XOR<cc_userUpdateWithoutCc_user_illnessInput, cc_userUncheckedUpdateWithoutCc_user_illnessInput>
  }

  export type cc_userUpdateWithoutCc_user_illnessInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type cc_userUncheckedUpdateWithoutCc_user_illnessInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type cc_food_nutrientCreateManyCc_foodInput = {
    nutrient_id: number
  }

  export type cc_food_nutrientUpdateWithoutCc_foodInput = {
    cc_nutrient?: cc_nutrientUpdateOneRequiredWithoutCc_food_nutrientNestedInput
  }

  export type cc_food_nutrientUncheckedUpdateWithoutCc_foodInput = {
    nutrient_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_food_nutrientUncheckedUpdateManyWithoutCc_foodInput = {
    nutrient_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_user_illnessCreateManyCc_illnessInput = {
    user_id: number
  }

  export type cc_user_illnessUpdateWithoutCc_illnessInput = {
    cc_user?: cc_userUpdateOneRequiredWithoutCc_user_illnessNestedInput
  }

  export type cc_user_illnessUncheckedUpdateWithoutCc_illnessInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_user_illnessUncheckedUpdateManyWithoutCc_illnessInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_food_nutrientCreateManyCc_nutrientInput = {
    food_id: number
  }

  export type cc_food_nutrientUpdateWithoutCc_nutrientInput = {
    cc_food?: cc_foodUpdateOneRequiredWithoutCc_food_nutrientNestedInput
  }

  export type cc_food_nutrientUncheckedUpdateWithoutCc_nutrientInput = {
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_food_nutrientUncheckedUpdateManyWithoutCc_nutrientInput = {
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_user_illnessCreateManyCc_userInput = {
    illness_id: number
  }

  export type cc_user_illnessUpdateWithoutCc_userInput = {
    cc_illness?: cc_illnessUpdateOneRequiredWithoutCc_user_illnessNestedInput
  }

  export type cc_user_illnessUncheckedUpdateWithoutCc_userInput = {
    illness_id?: IntFieldUpdateOperationsInput | number
  }

  export type cc_user_illnessUncheckedUpdateManyWithoutCc_userInput = {
    illness_id?: IntFieldUpdateOperationsInput | number
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