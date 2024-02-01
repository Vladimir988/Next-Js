import {useRouter} from "next/router";

export default function () {
  const {query} = useRouter()
    return(
      <div>
        User with id: {query.id}
      </div>
    );
};