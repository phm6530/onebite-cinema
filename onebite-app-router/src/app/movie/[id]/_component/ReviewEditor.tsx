import classes from "./ReviewEditor.module.scss";

type ReviewEditorProps = {
  id: string;
};

const ReviewEditor: React.FC<ReviewEditorProps> = ({ id }) => {
  const postReviewAction = async (formData: FormData) => {
    "use server";
    const user = formData.get("user")?.toString();
    const contents = formData.get("contents")?.toString();
    console.log(user, contents);
  };

  return (
    <section>
      <form action={postReviewAction}>
        <input type="text" name="user" placeholder="작성자" />
        <input type="text" name="contents" placeholder="리뷰 내용" />
        <button>test</button>
      </form>
    </section>
  );
};

export default ReviewEditor;
