import * as chalk from "chalk";
import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
	public check(email: string, password: string): boolean {
		if (password === "123456") {
			console.log(chalk.yellow("ATENÇÃO: Considere usar uma senha mais segura!"));
		}

		return this.checkNext(email, password);
	}
}