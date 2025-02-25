/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* Imports all modules for builds which do not load modules separately.
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2021
* @license Apache-2.0
*/
import CiphersModule from "./Ciphers.mjs";
import DefaultModule from "./Default.mjs";
import ImageModule from "./Image.mjs";
import CryptoModule from "./Crypto.mjs";
import SerialiseModule from "./Serialise.mjs";
import HashingModule from "./Hashing.mjs";
import BletchleyModule from "./Bletchley.mjs";
import CompressionModule from "./Compression.mjs";
import CodeModule from "./Code.mjs";
import EncodingsModule from "./Encodings.mjs";
import DiffModule from "./Diff.mjs";
import ShellcodeModule from "./Shellcode.mjs";
import ChartsModule from "./Charts.mjs";
import RegexModule from "./Regex.mjs";
import PGPModule from "./PGP.mjs";
import PublicKeyModule from "./PublicKey.mjs";
import OCRModule from "./OCR.mjs";
import URLModule from "./URL.mjs";
import UserAgentModule from "./UserAgent.mjs";
import ProtobufModule from "./Protobuf.mjs";
import YaraModule from "./Yara.mjs";

const OpModules = {};

Object.assign(
    OpModules,
    CiphersModule,
    DefaultModule,
    ImageModule,
    CryptoModule,
    SerialiseModule,
    HashingModule,
    BletchleyModule,
    CompressionModule,
    CodeModule,
    EncodingsModule,
    DiffModule,
    ShellcodeModule,
    ChartsModule,
    RegexModule,
    PGPModule,
    PublicKeyModule,
    OCRModule,
    URLModule,
    UserAgentModule,
    ProtobufModule,
    YaraModule,
);

export default OpModules;
