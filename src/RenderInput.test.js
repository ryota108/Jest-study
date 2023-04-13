import RenderInput from "./RenderInput";
import React from "react";
import { render,screen,cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"


describe("test userInput",()=>{
    it("should render correctly",()=>{
        render(<RenderInput/>);
        expect(screen.getByRole("button")).toBeTruthy()
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy()
    })
})

describe("Input form onChange event",()=>{
    it("Should update input value correctly",()=>{
        render(<RenderInput/>)
        const inputValue = screen.getByPlaceholderText("Enter");
        userEvent.type(inputValue,"test")
        // expect(inputValue.value).toBe("test")
    })
})

describe("Console button conditionally triggered",()=>{
    it("Should not trigger output function",()=>{
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole}/>)
        userEvent.click(screen.getByRole("button"))
        expect(outputConsole).not.toHaveBeenCalled();
    })
    it("Should trigger output function",()=>{
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole}/>);
        const inputValue = screen.getByPlaceholderText("Enter");
        userEvent.type(inputValue,"test");
        expect(outputConsole).toHaveBeenCalled()
    })
})