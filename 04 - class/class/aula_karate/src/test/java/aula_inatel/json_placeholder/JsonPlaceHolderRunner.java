package aula_inatel.json_placeholder;

import com.intuit.karate.junit5.Karate;

public class JsonPlaceHolderRunner {

    @Karate.Test
    Karate testSw() {
        return Karate.run("json_placeholder").relativeTo(getClass());
    }

}
