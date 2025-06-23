import {createTargetJSWebOptions} from "@anio-software/enkore-private.spec/factory"

export function defineTargetConfig(options: Parameters<typeof createTargetJSWebOptions>[0]) {
	// @ts-ignore:next-line
	console.log("'defineTargetConfig' is deprecated and will be removed in the future. Use 'defineTargetOptions' instead.");

	return createTargetJSWebOptions(options);
}
