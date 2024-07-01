
import Card from './Card';
import './styles.css'; 

const App = () => {
    return (
        <div className="app">
            <div className="card-container">
                <Card
                    name="White Traditional Long Dress"
                    imageUrl="https://imgs.search.brave.com/zN28wV6yhWVDsA1UoD4izcsGbwYP3jqwv38_nzciOo4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFscVYtQ1prRVMu/anBn"
                    price="$3.99"
                />
                <Card
                    name="Denim Jacket"
                    imageUrl="https://imgs.search.brave.com/KHTV7XcEmfnubDTfNP3mP8Nd5JGA6j9QeqxLW9ryW1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWx2/ZXRoZWFydC5jb20v/Y2RuL3Nob3AvZmls/ZXMvSk9ORVMtRElR/LTQ1NTYtMjgyLVNV/TU1FUi1CTFVFLTI3/Mjhjb3B5LmpwZz92/PTE3MDg3MjcwOTUm/d2lkdGg9MTA4MA"
                    price="$3.99"
                />
                <Card
                    name="Athenes Skirt"
                    imageUrl="https://imgs.search.brave.com/ZrftAXooyXrYbNmSgxHSd7io6tir02Z1YcDie7ty6F8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uYXRp/b25hbGNsb3RoaW5n/Lm9yZy9pbWFnZXMv/MjAxNi8wMS93ZWRk/aW5nX2RyZXNzLmpw/Zw"
                    price="$3.99"
                />
            </div>
        </div>
    );
};

export default App;
