import TaskCard from '@/components/TaskCard/TaskCard';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('TaskCard Component', () => {
  const mockProps = {
    title: 'Test Task',
    description: 'Test Description',
    state: 'to-do' as 'to-do' | 'doing' | 'done',
    onStateChange: jest.fn(),
    onUpdateTask: jest.fn(),
    onDeleteTask: jest.fn(),
  };

  it('renders the TaskCard component', () => {
    render(<TaskCard {...mockProps} />);
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
  });

  it('calls onDeleteTask when delete button is clicked', () => {
    render(<TaskCard {...mockProps} />);
    const deleteButton = screen.getByRole('button', { name: /delete_forever/i });
    fireEvent.click(deleteButton);
    expect(mockProps.onDeleteTask).toHaveBeenCalled();
  });

  it('allows editing the title', () => {
    render(<TaskCard {...mockProps} />);
    const titleField = screen.getByText(/Test Task/i);
    fireEvent.click(titleField); 
    const input = screen.getByPlaceholderText(/Haz clic para agregar un título/i);
    fireEvent.change(input, { target: { value: 'Updated Title' } });
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(mockProps.onUpdateTask).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Updated Title',
      })
    );
  });
});
