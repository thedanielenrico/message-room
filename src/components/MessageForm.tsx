const MessageForm = () => {
  return (
    <div className="flex flex-col w-5/6 m-auto">
      <textarea
        className="border-black border-x-2 border-y-2 rounded-md mb-4"
        placeholder="add message"
      />
      <button className="block">Send Message</button>
    </div>
  );
};

export default MessageForm;
