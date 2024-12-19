import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button/Button"; 

describe("Button", () => {
  it("renders the button with the given label", () => {
    render(<Button label="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders the button with the given icon", () => {
    render(
      <Button
        label="Click Me"
        icon={<span className="material-icons">add</span>}
      />
    );

    expect(screen.getByText("add")).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const onClickMock = jest.fn(); 
    render(<Button label="Click Me" onClick={onClickMock} />);
    
    fireEvent.click(screen.getByText("Click Me"));
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies the given classname", () => {
    render(<Button label="Click Me" classname="custom-button" />);
    
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-button");
  });

  it("renders button without label if label is not provided", () => {
    render(<Button icon={<span className="material-icons">add</span>} />);
    
    expect(screen.getByText("add")).toBeInTheDocument();
    expect(screen.queryByText("Click Me")).not.toBeInTheDocument();
  });
});
