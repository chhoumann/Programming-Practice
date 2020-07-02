class Box {
    private:
		// Type 'long' for large inputs
        long l, b, h;
    public:
        Box() {
            l = b = h = 0;
        }
        Box(int length, int breadth, int height) {
            l = length;
            b = breadth;
            h = height;
        }
        Box(const Box& box) {
            l = box.l;
            b = box.b;
            h = box.h;
        }
        int getLength() {
            return l;
        }
        int getBreadth() {
            return b;
        }
        int getHeight() {
            return h;
        }
        long long CalculateVolume() {
            return (long)(l * b * h);
        }
        friend bool operator<(Box& A, Box& B) {
            return (A.l < B.l || (A.b < B.b && A.l == B.l) || (A.h < B.h && A.b == B.b && A.l == B.l));
        }
		friend ostream& operator<<(ostream& out, Box& B) {
			return out << B.l << " " << B.b << " " << B.h;
		}
};