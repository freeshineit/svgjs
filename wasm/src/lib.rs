use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parser(text: &str) -> String {
    "".to_string()
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn it_works() {}
}
