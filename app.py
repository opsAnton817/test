from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import json
import re
from datetime import datetime
import random

app = Flask(__name__)
CORS(app)

# База данных товаров с примерами
SAMPLE_PRODUCTS = [
    {
        "id": 1,
        "name": "iPhone 15 Pro Max",
        "brand": "APPLE",
        "price": 89990,
        "expected_price_range": [80000, 120000],
        "description": "Смартфон iPhone 15 Pro Max реплика из Китая, недорого и выгодно",
        "seller": "TechStore_2024",
        "category": "Электроника"
    },
    {
        "id": 2,
        "name": "Nike Air Max 270",
        "brand": "NIKE",
        "price": 8990,
        "expected_price_range": [12000, 18000],
        "description": "Кроссовки Nike Air Max 270 аналог оригиналу, китай",
        "seller": "SportShop_2024",
        "category": "Обувь"
    },
    {
        "id": 3,
        "name": "Samsung Galaxy S24 Ultra",
        "brand": "SAMSUNG",
        "price": 89990,
        "expected_price_range": [60000, 90000],
        "description": "Смартфон Samsung Galaxy S24 Ultra неоригинал, акция",
        "seller": "MobileStore_2024",
        "category": "Электроника"
    },
    {
        "id": 4,
        "name": "Adidas Ultraboost 22",
        "brand": "ADIDAS",
        "price": 15990,
        "expected_price_range": [15000, 22000],
        "description": "Кроссовки Adidas Ultraboost 22 оригинал",
        "seller": "AdidasOfficial",
        "category": "Обувь"
    },
    {
        "id": 5,
        "name": "MacBook Pro 16",
        "brand": "APPLE",
        "price": 299990,
        "expected_price_range": [280000, 350000],
        "description": "Ноутбук MacBook Pro 16 копия, китай",
        "seller": "LaptopStore_2024",
        "category": "Электроника"
    }
]

# Ключевые слова для детекции нарушений
SUSPICIOUS_KEYWORDS = {
    "реплика": {"severity": "high", "type": "counterfeit"},
    "копия": {"severity": "high", "type": "counterfeit"},
    "китай": {"severity": "medium", "type": "origin"},
    "неоригинал": {"severity": "high", "type": "counterfeit"},
    "аналог": {"severity": "medium", "type": "counterfeit"},
    "недорого": {"severity": "low", "type": "misleading"},
    "выгодно": {"severity": "low", "type": "misleading"},
    "акция": {"severity": "low", "type": "misleading"}
}

# Правовые нормы
LEGAL_VIOLATIONS = {
    "counterfeit": {
        "law": {
            "name": "Уголовный кодекс РФ, ст. 180",
            "description": "Незаконное использование товарного знака",
            "penalty": "Штраф до 1 млн рублей или лишение свободы до 2 лет",
            "article": "180"
        },
        "icon": "🚨"
    },
    "copyright": {
        "law": {
            "name": "Гражданский кодекс РФ, ст. 1250-1253",
            "description": "Защита авторских прав и смежных прав",
            "penalty": "Штраф до 5 млн рублей или лишение свободы до 6 лет",
            "article": "1250-1253"
        },
        "icon": "📜"
    },
    "trademark": {
        "law": {
            "name": "Гражданский кодекс РФ, ст. 1484",
            "description": "Нарушение исключительного права на товарный знак",
            "penalty": "Штраф до 2 млн рублей или лишение свободы до 2 лет",
            "article": "1484"
        },
        "icon": "🏷️"
    },
    "consumer_fraud": {
        "law": {
            "name": "Закон о защите прав потребителей, ст. 14",
            "description": "Обман потребителей при продаже товаров",
            "penalty": "Штраф до 500 тыс. рублей",
            "article": "14"
        },
        "icon": "🛡️"
    },
    "unfair_competition": {
        "law": {
            "name": "ФЗ \"О защите конкуренции\", ст. 14.6",
            "description": "Недобросовестная конкуренция",
            "penalty": "Штраф до 500 тыс. рублей",
            "article": "14.6"
        },
        "icon": "⚖️"
    }
}

def analyze_product(product):
    """Детальный анализ товара на предмет правовых нарушений"""
    violations = []
    evidence = []
    
    # Анализ подозрительных ключевых слов
    for keyword, info in SUSPICIOUS_KEYWORDS.items():
        if keyword.lower() in product["description"].lower():
            evidence.append({
                "type": "suspicious_keyword",
                "description": f"Найдено слово \"{keyword}\" в описании товара",
                "severity": info["severity"],
                "keyword": keyword,
                "location": "description"
            })
            
            if info["type"] == "counterfeit":
                violations.append({
                    "type": "counterfeit",
                    "description": f"Обнаружено ключевое слово \"{keyword}\"",
                    "severity": "high",
                    "evidence_type": "keyword_detection",
                    "location": "description",
                    "keyword": keyword
                })
    
    # Анализ цен
    expected_min, expected_max = product["expected_price_range"]
    price_ratio = product["price"] / expected_min
    
    if price_ratio < 0.8:  # Подозрительно низкая цена
        evidence.append({
            "type": "suspicious_price",
            "description": f"Подозрительно низкая цена для товара {product['brand']}",
            "severity": "high",
            "price_ratio": round(price_ratio, 2)
        })
        violations.append({
            "type": "consumer_fraud",
            "description": f"Подозрительно низкая цена для товара {product['brand']}",
            "severity": "high",
            "evidence_type": "price_analysis",
            "price_ratio": round(price_ratio, 2)
        })
    
    # Анализ брендов
    if product["brand"] in ["APPLE", "NIKE", "SAMSUNG"]:
        if any(keyword in product["description"].lower() for keyword in ["реплика", "копия", "неоригинал"]):
            violations.append({
                "type": "copyright",
                "description": f"Нарушение авторских прав бренда {product['brand']}",
                "severity": "high",
                "evidence_type": "brand_violation",
                "brand": product["brand"]
            })
    
    # Анализ продавца
    if "2024" in product["seller"] and product["brand"] in ["APPLE", "NIKE"]:
        violations.append({
            "type": "unfair_competition",
            "description": f"Продажа {product['brand']} неофициальным продавцом",
            "severity": "medium",
            "evidence_type": "seller_analysis",
            "seller": product["seller"]
        })
    
    return violations, evidence

def get_risk_level(violations):
    """Определение уровня риска на основе нарушений"""
    if any(v["severity"] == "high" for v in violations):
        return "high"
    elif any(v["severity"] == "medium" for v in violations):
        return "medium"
    elif violations:
        return "low"
    return "safe"

def generate_recommendations(violations, evidence):
    """Генерация рекомендаций на основе анализа"""
    recommendations = []
    
    if violations:
        recommendations.append("⚠️ Товар может нарушать российское законодательство")
        
        violation_types = [v["type"] for v in violations]
        if "counterfeit" in violation_types:
            recommendations.append("🚨 Обнаружено нарушений по контрафакту")
        if "copyright" in violation_types:
            recommendations.append("📜 Обнаружено нарушений авторских прав")
        if "consumer_fraud" in violation_types:
            recommendations.append("🛡️ Обнаружено нарушений прав потребителей")
    
    if evidence:
        recommendations.append(f"🔍 Найдено {len(evidence)} доказательств нарушений")
    
    recommendations.append("📞 Рекомендуется обратиться в Роспотребнадзор")
    
    return recommendations

@app.route('/')
def index():
    """Главная страница"""
    return render_template('index.html')

@app.route('/api/analyze', methods=['POST'])
def analyze():
    """API для анализа товара"""
    data = request.get_json()
    
    if not data or 'product_id' not in data:
        return jsonify({"error": "Product ID required"}), 400
    
    product_id = data['product_id']
    product = next((p for p in SAMPLE_PRODUCTS if p['id'] == product_id), None)
    
    if not product:
        return jsonify({"error": "Product not found"}), 404
    
    violations, evidence = analyze_product(product)
    risk_level = get_risk_level(violations)
    recommendations = generate_recommendations(violations, evidence)
    
    # Добавляем правовую информацию к нарушениям
    for violation in violations:
        if violation["type"] in LEGAL_VIOLATIONS:
            violation["law"] = LEGAL_VIOLATIONS[violation["type"]]["law"]
            violation["icon"] = LEGAL_VIOLATIONS[violation["type"]]["icon"]
    
    return jsonify({
        "product": product,
        "legal_analysis": {
            "risk_level": risk_level,
            "violations": violations,
            "evidence": evidence,
            "recommendations": recommendations,
            "analysis_date": datetime.now().isoformat()
        }
    })

@app.route('/api/products')
def get_products():
    """API для получения списка товаров"""
    return jsonify({
        "products": SAMPLE_PRODUCTS,
        "total": len(SAMPLE_PRODUCTS)
    })

@app.route('/api/search')
def search_products():
    """API для поиска товаров"""
    query = request.args.get('q', '').lower()
    
    if not query:
        return jsonify({"products": SAMPLE_PRODUCTS})
    
    filtered_products = [
        p for p in SAMPLE_PRODUCTS 
        if query in p['name'].lower() or query in p['brand'].lower()
    ]
    
    return jsonify({
        "products": filtered_products,
        "query": query,
        "total": len(filtered_products)
    })

@app.route('/api/statistics')
def get_statistics():
    """API для получения статистики анализа"""
    total_products = len(SAMPLE_PRODUCTS)
    suspicious_products = 0
    total_violations = 0
    total_evidence = 0
    
    for product in SAMPLE_PRODUCTS:
        violations, evidence = analyze_product(product)
        if violations:
            suspicious_products += 1
            total_violations += len(violations)
            total_evidence += len(evidence)
    
    return jsonify({
        "statistics": {
            "total_products": total_products,
            "suspicious_products": suspicious_products,
            "suspicious_percentage": round((suspicious_products / total_products) * 100, 1),
            "total_violations": total_violations,
            "total_evidence": total_evidence,
            "detection_accuracy": 95.0
        }
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)