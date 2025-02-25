/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2021
* @license Apache-2.0
*/
import AddTextToImage from "../../operations/AddTextToImage.mjs";
import BlurImage from "../../operations/BlurImage.mjs";
import ContainImage from "../../operations/ContainImage.mjs";
import ConvertImageFormat from "../../operations/ConvertImageFormat.mjs";
import CoverImage from "../../operations/CoverImage.mjs";
import CropImage from "../../operations/CropImage.mjs";
import DitherImage from "../../operations/DitherImage.mjs";
import ExtractEXIF from "../../operations/ExtractEXIF.mjs";
import ExtractLSB from "../../operations/ExtractLSB.mjs";
import ExtractRGBA from "../../operations/ExtractRGBA.mjs";
import FlipImage from "../../operations/FlipImage.mjs";
import GenerateImage from "../../operations/GenerateImage.mjs";
import GenerateQRCode from "../../operations/GenerateQRCode.mjs";
import ImageBrightnessContrast from "../../operations/ImageBrightnessContrast.mjs";
import ImageFilter from "../../operations/ImageFilter.mjs";
import ImageHueSaturationLightness from "../../operations/ImageHueSaturationLightness.mjs";
import ImageOpacity from "../../operations/ImageOpacity.mjs";
import InvertImage from "../../operations/InvertImage.mjs";
import NormaliseImage from "../../operations/NormaliseImage.mjs";
import ParseQRCode from "../../operations/ParseQRCode.mjs";
import RandomizeColourPalette from "../../operations/RandomizeColourPalette.mjs";
import RemoveEXIF from "../../operations/RemoveEXIF.mjs";
import RenderImage from "../../operations/RenderImage.mjs";
import ResizeImage from "../../operations/ResizeImage.mjs";
import RotateImage from "../../operations/RotateImage.mjs";
import SharpenImage from "../../operations/SharpenImage.mjs";
import SplitColourChannels from "../../operations/SplitColourChannels.mjs";
import ViewBitPlane from "../../operations/ViewBitPlane.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Image = {
    "Add Text To Image": AddTextToImage,
    "Blur Image": BlurImage,
    "Contain Image": ContainImage,
    "Convert Image Format": ConvertImageFormat,
    "Cover Image": CoverImage,
    "Crop Image": CropImage,
    "Dither Image": DitherImage,
    "Extract EXIF": ExtractEXIF,
    "Extract LSB": ExtractLSB,
    "Extract RGBA": ExtractRGBA,
    "Flip Image": FlipImage,
    "Generate Image": GenerateImage,
    "Generate QR Code": GenerateQRCode,
    "Image Brightness / Contrast": ImageBrightnessContrast,
    "Image Filter": ImageFilter,
    "Image Hue/Saturation/Lightness": ImageHueSaturationLightness,
    "Image Opacity": ImageOpacity,
    "Invert Image": InvertImage,
    "Normalise Image": NormaliseImage,
    "Parse QR Code": ParseQRCode,
    "Randomize Colour Palette": RandomizeColourPalette,
    "Remove EXIF": RemoveEXIF,
    "Render Image": RenderImage,
    "Resize Image": ResizeImage,
    "Rotate Image": RotateImage,
    "Sharpen Image": SharpenImage,
    "Split Colour Channels": SplitColourChannels,
    "View Bit Plane": ViewBitPlane,
};

export default OpModules;
