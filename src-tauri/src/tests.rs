fn add_two(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_two() {
        assert_eq!(add_two(2, 2), 4);
        assert_eq!(add_two(-1, 1), 0);
    }
}
