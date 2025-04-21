
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Cc_foodScalarFieldEnum = {
  food_id: 'food_id',
  food_name: 'food_name',
  food_description: 'food_description'
};

exports.Prisma.Cc_food_nutrientScalarFieldEnum = {
  food_id: 'food_id',
  nutrient_id: 'nutrient_id'
};

exports.Prisma.Cc_illnessScalarFieldEnum = {
  illness_id: 'illness_id',
  illness_name: 'illness_name',
  illness_description: 'illness_description'
};

exports.Prisma.Cc_nutrientScalarFieldEnum = {
  nutrient_id: 'nutrient_id',
  nutrient_name: 'nutrient_name',
  nutrient_description: 'nutrient_description'
};

exports.Prisma.Cc_userScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  password: 'password'
};

exports.Prisma.Cc_user_illnessScalarFieldEnum = {
  user_id: 'user_id',
  illness_id: 'illness_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  cc_food: 'cc_food',
  cc_food_nutrient: 'cc_food_nutrient',
  cc_illness: 'cc_illness',
  cc_nutrient: 'cc_nutrient',
  cc_user: 'cc_user',
  cc_user_illness: 'cc_user_illness'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\idiar\\OneDrive\\Documents\\Information Technology Y2 S2\\Continuous Integration and Continuous Development\\ComfyCravings\\server\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\idiar\\OneDrive\\Documents\\Information Technology Y2 S2\\Continuous Integration and Continuous Development\\ComfyCravings\\server\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel cc_food {\n  food_id          Int                @id @default(autoincrement())\n  food_name        String             @db.VarChar(255)\n  food_description String?\n  cc_food_nutrient cc_food_nutrient[]\n}\n\nmodel cc_food_nutrient {\n  food_id     Int\n  nutrient_id Int\n  cc_food     cc_food     @relation(fields: [food_id], references: [food_id], onDelete: Cascade, onUpdate: NoAction)\n  cc_nutrient cc_nutrient @relation(fields: [nutrient_id], references: [nutrient_id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([food_id, nutrient_id])\n}\n\nmodel cc_illness {\n  illness_id          Int               @id @default(autoincrement())\n  illness_name        String            @db.VarChar(100)\n  illness_description String?\n  cc_user_illness     cc_user_illness[]\n}\n\nmodel cc_nutrient {\n  nutrient_id          Int                @id @default(autoincrement())\n  nutrient_name        String             @db.VarChar(100)\n  nutrient_description String?\n  cc_food_nutrient     cc_food_nutrient[]\n}\n\nmodel cc_user {\n  user_id         Int               @id @default(autoincrement())\n  email           String            @db.VarChar(320)\n  password        String            @db.VarChar(128)\n  cc_user_illness cc_user_illness[]\n}\n\nmodel cc_user_illness {\n  user_id    Int\n  illness_id Int\n  cc_illness cc_illness @relation(fields: [illness_id], references: [illness_id], onDelete: Cascade, onUpdate: NoAction)\n  cc_user    cc_user    @relation(fields: [user_id], references: [user_id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([user_id, illness_id])\n}\n",
  "inlineSchemaHash": "b587db603551df3dba110e25e07811a427aefd9876bf373483d7e12fea83da9b",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"cc_food\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"food_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"food_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"food_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_food_nutrient\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_food_nutrient\",\"nativeType\":null,\"relationName\":\"cc_foodTocc_food_nutrient\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_food_nutrient\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"food_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nutrient_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_food\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_food\",\"nativeType\":null,\"relationName\":\"cc_foodTocc_food_nutrient\",\"relationFromFields\":[\"food_id\"],\"relationToFields\":[\"food_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_nutrient\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_nutrient\",\"nativeType\":null,\"relationName\":\"cc_food_nutrientTocc_nutrient\",\"relationFromFields\":[\"nutrient_id\"],\"relationToFields\":[\"nutrient_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"food_id\",\"nutrient_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_illness\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"illness_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"illness_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"illness_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_user_illness\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_user_illness\",\"nativeType\":null,\"relationName\":\"cc_illnessTocc_user_illness\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_nutrient\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nutrient_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nutrient_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nutrient_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_food_nutrient\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_food_nutrient\",\"nativeType\":null,\"relationName\":\"cc_food_nutrientTocc_nutrient\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"320\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_user_illness\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_user_illness\",\"nativeType\":null,\"relationName\":\"cc_userTocc_user_illness\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cc_user_illness\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"illness_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_illness\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_illness\",\"nativeType\":null,\"relationName\":\"cc_illnessTocc_user_illness\",\"relationFromFields\":[\"illness_id\"],\"relationToFields\":[\"illness_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cc_user\",\"nativeType\":null,\"relationName\":\"cc_userTocc_user_illness\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"user_id\",\"illness_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
