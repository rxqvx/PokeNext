import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

describe("Navbar test suite", () => {
	it("should renders navbar", () => {
		// const heading = screen.getByRole("heading", {
		// 	name: /welcome to next\.js!/i,
		// });
		// expect(heading).toBeInTheDocument();
		// const wrapper = givenComponentAfterMount();
		// thenComponentShouldExists(wrapper, "navbar");
	});
});

const givenComponentAfterMount = () => {
	const wrapper = render(<Navbar />);

	return wrapper;
};

const thenComponentShouldExists = (wrapper: any, dataTest: string) => {
	expect(findByTestAttr(wrapper, dataTest)).toBeTruthy();
};

const findByTestAttr = (wrapper: any, val: string) => {
	return wrapper.getByTestId(`[data-test='${val}']`);
};
